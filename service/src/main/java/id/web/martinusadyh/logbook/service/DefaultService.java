package id.web.martinusadyh.logbook.service;

import id.web.martinusadyh.logbook.domain.Category;
import id.web.martinusadyh.logbook.domain.Module;
import java.util.List;

/**
 *
 * @author martinus
 */
public interface DefaultService {
    
    public List<Category> findAllCategory(Integer first, Integer pageSize);
    public List<Module> findAllModule(Integer first, Integer pageSize);

    public Long countCategoryTable();
    public Long countModuleTable();

    public void save(Category category);

    public void save(Module module);

    public Category findCategoryById(Integer idCategory);

    public Module findModuleById(Integer idModule);
}
