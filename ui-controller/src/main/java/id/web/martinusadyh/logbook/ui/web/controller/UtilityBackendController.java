package id.web.martinusadyh.logbook.ui.web.controller;

import id.web.martinusadyh.logbook.domain.utility.EmailTemplate;
import id.web.martinusadyh.logbook.domain.security.UserProfile;
import id.web.martinusadyh.logbook.domain.security.Role;
import id.web.martinusadyh.logbook.service.UtilityService;
import id.web.martinusadyh.logbook.service.SecurityService;
import id.web.martinusadyh.logbook.ui.web.controller.helper.SpringSecurityHelper;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ModelAttribute;

/**
 *
 * @author martinus
 */
@Controller
public class UtilityBackendController {
    
    @Autowired private UtilityService utilityService;
    @Autowired private SecurityService securityService;
    
    private final SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
    private final String DEFAULT_ROLE = "USER";
    
    @RequestMapping(value="/json/utility/userprofile/current-username", method=RequestMethod.GET)
    public @ResponseBody Map<String, Object> getCurrentUsername() {
        final Map<String, Object> jsonData = new HashMap<String, Object>();
        final String userName = SpringSecurityHelper.getCurrentUsername();
        
        final UserProfile obj = utilityService.findUserByName(userName);
        if (obj != null) {
            jsonData.put("id", obj.getId());
            jsonData.put("createdDate", obj.getCreatedDate());
            jsonData.put("lastUpdateDate", obj.getLastUpdateDate());
            jsonData.put("userName", obj.getUserName());
            jsonData.put("currentDate", dateFormat.format(new Date()));
        }
        
        return jsonData;
    }
    
    @RequestMapping(value="/json/utility/userprofile/finduser", method=RequestMethod.GET)
    public @ResponseBody Map<String, Object> getCurrentUserByID(
            @RequestParam(value="id", required=true) Integer id) {
        
        final Map<String, Object> jsonData = new HashMap<String, Object>();
        final UserProfile obj = utilityService.getCurrentProfile(id);
        Integer totalData = 0;
        if (obj != null) {
            jsonData.put("id", obj.getId());
            jsonData.put("createdDate", obj.getCreatedDate());
            jsonData.put("lastUpdateDate", obj.getLastUpdateDate());
            jsonData.put("userName", obj.getUserName());
            jsonData.put("password", obj.getPassword());
            jsonData.put("firstName", obj.getFirstName());
            jsonData.put("lastName", obj.getLastName());
            jsonData.put("emailAddress", obj.getEmailAddress());
            totalData += 1;
        }
        
        jsonData.put("totalData", totalData);
        
        return jsonData;
    }
    
    @RequestMapping(value="/json/utility/userprofile/list", method=RequestMethod.GET)
    public @ResponseBody Map<String, Object> getAllUser(
            @RequestParam(value="start", required=true) Integer first,
            @RequestParam(value="limit", required=true) Integer pageSize) {
        
        final Map<String, Object> jsonData = new HashMap<String, Object>();
        final Long totalRows = utilityService.countUserTable();
        final List<UserProfile> obj = utilityService.findAllUser(first, pageSize);
        List<Map<String, Object>> items = new ArrayList<Map<String, Object>>();
        
        for (UserProfile up : obj) {
            Map<String, Object> row = new HashMap<String, Object>();
            row.put("id", up.getId());
            row.put("createdDate", up.getCreatedDate());
            row.put("lastUpdateDate", up.getLastUpdateDate());
            row.put("userName", up.getUserName());
            row.put("firstName", up.getFirstName());
            row.put("lastName", up.getLastName());
            row.put("emailAddress", up.getEmailAddress());

            items.add(row);
        }

        jsonData.put("items", items);
        jsonData.put("totalCount", totalRows.intValue());
        
        return jsonData;
    }
    
    @RequestMapping(value="/json/utility/emailtemplate/findtemplate", method=RequestMethod.GET)
    public @ResponseBody Map<String, Object> getCurrentEmailTemplate() {
        
        final Map<String, Object> jsonData = new HashMap<String, Object>();
        final EmailTemplate obj = utilityService.getCurrentEmailTemplate();
        Integer totalData = 0;
        if (obj != null) {
            jsonData.put("id", obj.getId());
            jsonData.put("createdDate", obj.getCreatedDate());
            jsonData.put("lastUpdateDate", obj.getLastUpdateDate());
            jsonData.put("sendTo", obj.getSendTo());
            jsonData.put("carbonCopy", obj.getCarbonCopy());
            jsonData.put("subject", obj.getSubject());
            jsonData.put("emailBody", obj.getEmailBody());
            totalData += 1;
        }
        
        jsonData.put("totalData", totalData);
        
        return jsonData;
    }
    
    @RequestMapping(value="/json/utility/userprofile/save", method=RequestMethod.POST)
    public @ResponseBody Map<String, Object> saveUserProfile(
            @ModelAttribute UserProfile obj) {
        final Map<String, Object> jsonData = new HashMap<String, Object>();
        
        try {
            // find role first
            Role resultRole = securityService.findRoleByName(DEFAULT_ROLE);
            obj.setRole(resultRole);
            
            utilityService.saveUserProfile(obj);
            
            jsonData.put("success", Boolean.TRUE);
            jsonData.put("msg", "User has been registered, now you can login with your account !");
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
    
    @RequestMapping(value="/json/utility/emailtemplate/save", method=RequestMethod.POST)
    public @ResponseBody Map<String, Object> saveEmailTemplate(
            @ModelAttribute EmailTemplate obj) {
        final Map<String, Object> jsonData = new HashMap<String, Object>();
        
        try {
            utilityService.saveEmailTemplate(obj);
            
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
