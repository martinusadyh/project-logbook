package id.web.martinusadyh.logbook.ui.web.controller;

import id.web.martinusadyh.logbook.domain.Category;
import id.web.martinusadyh.logbook.domain.Module;
import id.web.martinusadyh.logbook.domain.security.UserProfile;
import id.web.martinusadyh.logbook.domain.trx.LogBookDetails;
import id.web.martinusadyh.logbook.domain.trx.LogBookHeader;
import id.web.martinusadyh.logbook.service.DefaultService;
import id.web.martinusadyh.logbook.service.TrxService;
import id.web.martinusadyh.logbook.service.UtilityService;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author martinus
 */
@Controller
public class TrxBackendController {
    
    @Autowired private TrxService trxService;
    @Autowired private DefaultService defaultService;
    @Autowired private UtilityService utilityService;
    
    private final SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
    private final SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm");
    private final SimpleDateFormat dateTimeFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm");
    
    @RequestMapping(value="/json/entri/list", method=RequestMethod.GET)
    public @ResponseBody Map<String, Object> getAllLogBook(
            @RequestParam(value="start", required=true) Integer start,
            @RequestParam(value="limit", required=true) Integer limit) {
        
        final Map<String, Object> jsonData = new HashMap<String, Object>();
        final Long totalRows = trxService.countLogBookHeader();
        final List<LogBookHeader> obj = trxService.findAllLogBook(start, limit);
        List<Map<String, Object>> items = new ArrayList<Map<String, Object>>();
        List<Map<String, Object>> details = new ArrayList<Map<String, Object>>();
        
        if (obj != null) {
            for (LogBookHeader lh : obj) {
                Map<String, Object> row = new HashMap<String, Object>();
                row.put("id", lh.getId());
                row.put("createdDate", lh.getCreatedDate());
                row.put("lastUpdateDate", lh.getLastUpdateDate());
                row.put("logDate", dateFormat.format(lh.getLogDate()));
                row.put("totalLaporan", lh.getLogBookDetails().size());
                details = new ArrayList<Map<String, Object>>();
                for (LogBookDetails lbd : lh.getLogBookDetails()) {
                    Map<String, Object> detailRow = new HashMap<String, Object>();
                    detailRow.put("id", lbd.getId());
                    detailRow.put("createdDate", dateFormat.format(lbd.getCreatedDate()));
                    detailRow.put("lastUpdateDate", dateFormat.format(lbd.getLastUpdateDate()));
                    detailRow.put("timeReport", timeFormat.format(lbd.getTimeReporting()));
                    detailRow.put("userName", lbd.getReceivedBy().getUserName());
                    detailRow.put("fromUser", lbd.getFromUser());
                    detailRow.put("problem", lbd.getProblem());
                    detailRow.put("suspect", lbd.getSuspect());
                    detailRow.put("solution", lbd.getSolution());
                    detailRow.put("timeSolved", timeFormat.format(lbd.getTimeSolved()));
                    detailRow.put("solvedBy", lbd.getSolvedBy().getUserName());
                    detailRow.put("categoryName", lbd.getCategory().getCategoryName());
                    detailRow.put("moduleName", lbd.getModule().getModuleName());
                    
                    details.add(detailRow);
                }
                row.put("logBookDetails", details);
                items.add(row);
            }
            
            jsonData.put("items", items);
            jsonData.put("totalCount", totalRows.intValue());
        } else {
            jsonData.put("success", Boolean.FALSE);
            jsonData.put("msg", "Data not found !");
        }
        
        return jsonData;
    }
    
    @RequestMapping(value="/json/entri/save", method=RequestMethod.POST)
    public @ResponseBody Map<String, Object> saveLogBook(
            @RequestParam(value="sysDate", required=true) String sysDate,
            @RequestParam(value="idReceived", required=true) Integer idReceived,
            @RequestParam(value="idSolvedBy", required=true) Integer idSolvedBy,
            @RequestParam(value="idCategory", required=true) Integer idCategory,
            @RequestParam(value="idModule", required=true) Integer idModule,
            @RequestParam(value="timeReport", required=true) String timeReport,
            @RequestParam(value="timeSolve", required=true) String timeSolve,
            @ModelAttribute LogBookDetails obj) {
        
        final Map<String, Object> jsonData = new HashMap<String, Object>();
        try {
            final Date trxDate = dateFormat.parse(sysDate);
            LogBookHeader lbh = trxService.findLogBookHeaderByTransactionDate(trxDate);
            final Category category = defaultService.findCategoryById(idCategory);
            final Module module = defaultService.findModuleById(idModule);
            
            if (idReceived == idSolvedBy) {
                final UserProfile up = utilityService.getCurrentProfile(idReceived);
                if (up != null) {
                    obj.setReceivedBy(up);
                    obj.setSolvedBy(up);
                }
            } else {
                final UserProfile receivedBy = utilityService.getCurrentProfile(idReceived);
                final UserProfile solvedBy = utilityService.getCurrentProfile(idSolvedBy);
                
                if (receivedBy != null && solvedBy != null) {
                    obj.setReceivedBy(receivedBy);
                    obj.setSolvedBy(solvedBy);
                }
            }
            
            if (lbh == null) {
                lbh = new LogBookHeader();
                lbh.setLogDate(trxDate);
                lbh.setLogBookDetails(new ArrayList<LogBookDetails>());
            }
            
            // time format
            final Date timeReporting = dateTimeFormat.parse(sysDate + " " + timeReport);
            final Date timeSolved = dateTimeFormat.parse(sysDate + " " + timeSolve);
            
            obj.setLastUpdateDate(new Date());
            obj.setTimeReporting(timeReporting);
            obj.setTimeSolved(timeSolved);
            obj.setCategory(category);
            obj.setModule(module);
            obj.setLogBookHeader(lbh);
            lbh.getLogBookDetails().add(obj);
            
            trxService.saveLogBookHeader(lbh);
            
            jsonData.put("success", Boolean.TRUE);
            jsonData.put("msg", "Record has been saved !");
        } catch (Exception e) {
            String msgErr = "";
            if (e.getCause() == null) {
                msgErr = e.getMessage();
            } else {
                msgErr = e.getCause().toString();
            }
            jsonData.put("success", Boolean.FALSE);
            jsonData.put("msg", msgErr);
        }
        
        return jsonData;
    }
}
