package id.web.martinusadyh.logbook.ui.web.controller;

import id.web.martinusadyh.logbook.domain.trx.LogBookHeader;
import id.web.martinusadyh.logbook.service.TrxService;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
    private final SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
    
    @RequestMapping(value="/json/entri/list", method=RequestMethod.GET)
    public @ResponseBody Map<String, Object> getAllLogBook(
            @RequestParam(value="start", required=true) Integer start,
            @RequestParam(value="limit", required=true) Integer limit) {
        
        final Map<String, Object> jsonData = new HashMap<String, Object>();
        final Long totalRows = trxService.countLogBookHeader();
        final List<LogBookHeader> obj = trxService.findAllLogBook(start, limit);
        List<Map<String, Object>> items = new ArrayList<Map<String, Object>>();
        
        if (obj != null) {
            for (LogBookHeader lh : obj) {
                Map<String, Object> row = new HashMap<String, Object>();
                row.put("id", lh.getId());
                row.put("createdDate", lh.getCreatedDate());
                row.put("lastUpdateDate", lh.getLastUpdateDate());
                row.put("logDate", dateFormat.format(lh.getLogDate()));
                row.put("totalLaporan", lh.getLogBookDetails().size());
                
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
}
