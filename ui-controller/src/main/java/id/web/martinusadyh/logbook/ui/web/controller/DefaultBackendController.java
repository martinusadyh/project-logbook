package id.web.martinusadyh.logbook.ui.web.controller;

import id.web.martinusadyh.logbook.domain.Category;
import id.web.martinusadyh.logbook.domain.Module;
import id.web.martinusadyh.logbook.service.DefaultService;
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
public class DefaultBackendController {
    
    @Autowired private DefaultService defaultService;
    
    @RequestMapping(value="/json/default/category/list", method=RequestMethod.GET)
    public @ResponseBody Map<String, Object> getAllCategory(
            @RequestParam(value="start", required=true) Integer start,
            @RequestParam(value="limit", required=true) Integer limit) {
        
        final Map<String, Object> jsonData = new HashMap<String, Object>();
        final Long totalRows = defaultService.countCategoryTable();
        final List<Category> obj = defaultService.findAllCategory(start, limit);
        List<Map<String, Object>> items = new ArrayList<Map<String, Object>>();
        
        for (Category ct : obj) {
            Map<String, Object> row = new HashMap<String, Object>();
            row.put("id", ct.getId());
            row.put("createdDate", ct.getCreatedDate());
            row.put("lastUpdateDate", ct.getLastUpdateDate());
            row.put("categoryName", ct.getCategoryName());
                
            items.add(row);
        }
        
        jsonData.put("items", items);
        jsonData.put("totalCount", totalRows.intValue());
        
        return jsonData;
    }
    
    @RequestMapping(value="/json/default/module/list", method=RequestMethod.GET)
    public @ResponseBody Map<String, Object> getAllModule(
            @RequestParam(value="start", required=true) Integer start,
            @RequestParam(value="limit", required=true) Integer limit) {
        
        final Map<String, Object> jsonData = new HashMap<String, Object>();
        final Long totalRows = defaultService.countModuleTable();
        final List<Module> obj = defaultService.findAllModule(start, limit);
        List<Map<String, Object>> items = new ArrayList<Map<String, Object>>();
        
        for (Module mdl : obj) {
            Map<String, Object> row = new HashMap<String, Object>();
            row.put("id", mdl.getId());
            row.put("createdDate", mdl.getCreatedDate());
            row.put("lastUpdateDate", mdl.getLastUpdateDate());
            row.put("categoryName", mdl.getModuleName());
            
            items.add(row);
        }
        
        jsonData.put("items", items);
        jsonData.put("totalCount", totalRows.intValue());
        
        return jsonData;
    }
}
