package id.web.martinusadyh.logbook.ui.web.controller;

import id.web.martinusadyh.logbook.domain.utility.EmailTemplate;
import id.web.martinusadyh.logbook.domain.utility.UserProfile;
import id.web.martinusadyh.logbook.service.UtilityService;
import java.util.HashMap;
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
public class UtilityBackendController {
    
    @Autowired private UtilityService utilityService;
    
    @RequestMapping(value="/json/utility/userprofile/finduser", method=RequestMethod.GET)
    public @ResponseBody Map<String, Object> getCurrentUserByID(
            @RequestParam(value="id", required=true) Integer id) {
        
        final Map<String, Object> jsonData = new HashMap<String, Object>();
        final UserProfile obj = utilityService.getCurrentProfile(id);
        if (obj != null) {
            jsonData.put("id", obj.getId());
            jsonData.put("createdDate", obj.getCreatedDate());
            jsonData.put("lastUpdateDate", obj.getLastUpdateDate());
            jsonData.put("userName", obj.getUserName());
            jsonData.put("password", obj.getPassword());
            jsonData.put("firstName", obj.getFirstName());
            jsonData.put("lastName", obj.getLastName());
            jsonData.put("emailAddress", obj.getEmailAddress());
            jsonData.put("passwordEmail", obj.getPasswordEmail());
        } else {
            jsonData.put("success", Boolean.FALSE);
            jsonData.put("msg", "Data not found !");
        }
        
        return jsonData;
    }
    
    @RequestMapping(value="/json/utility/emailtemplate/findtemplate", method=RequestMethod.GET)
    public @ResponseBody Map<String, Object> getCurrentEmailTemplate(
            @RequestParam(value="id", required=true) Integer id) {
        
        final Map<String, Object> jsonData = new HashMap<String, Object>();
        final EmailTemplate obj = utilityService.getCurrentEmailTemplate(id);
        if (obj != null) {
            jsonData.put("id", obj.getId());
            jsonData.put("createdDate", obj.getCreatedDate());
            jsonData.put("lastUpdateDate", obj.getLastUpdateDate());
            jsonData.put("sendTo", obj.getSendTo());
            jsonData.put("carbonCopy", obj.getCarbonCopy());
            jsonData.put("subject", obj.getSubject());
            jsonData.put("emailBody", obj.getEmailBody());
        } else {
            jsonData.put("success", Boolean.FALSE);
            jsonData.put("msg", "Data not found !");
        }
        
        return jsonData;
    }
    
    @RequestMapping(value="/json/utility/userprofile/save", method=RequestMethod.POST)
    public @ResponseBody Map<String, Object> saveUserProfile(
            @ModelAttribute UserProfile obj) {
        final Map<String, Object> jsonData = new HashMap<String, Object>();
        
        try {
            utilityService.saveUserProfile(obj);
            
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
