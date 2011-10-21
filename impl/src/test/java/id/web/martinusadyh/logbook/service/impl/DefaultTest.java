package id.web.martinusadyh.logbook.service.impl;

import id.web.martinusadyh.logbook.domain.Category;
import id.web.martinusadyh.logbook.domain.Module;
import org.junit.Test;
import static org.junit.Assert.*;

import java.util.List;
import java.util.ArrayList;
import java.util.Date;

public class DefaultTest extends BaseTest {
    
    @Test
    public void testSaveCategory() {
        List<Category> listCategory = new ArrayList<Category>();
        for (int i=0;i<4;i++) {
            Category c = new Category();
            c.setCreatedDate(new Date());
            c.setLastUpdateDate(new Date());
            c.setCategoryName("Category " + i);
            
            listCategory.add(c);
        }
        
        // save to DB
        for (Category category : listCategory) {
            defaultService.save(category);
        }
        
        List<Category> result = defaultService.findAllCategory(1, 50);
        assertEquals(3, result.size());
    }
    
    @Test
    public void testSaveModule() {
        List<Module> listModule = new ArrayList<Module>();
        for (int i=0; i<4;i++) {
            Module m = new Module();
            m.setCreatedDate(new Date());
            m.setLastUpdateDate(new Date());
            m.setModuleName("Module " + i);
            
            listModule.add(m);
        }
        
        // save to DB
        for (Module module : listModule) {
            defaultService.save(module);
        }
        
        List<Module> result = defaultService.findAllModule(1, 50);
        assertEquals(3, result.size());
    }
}
