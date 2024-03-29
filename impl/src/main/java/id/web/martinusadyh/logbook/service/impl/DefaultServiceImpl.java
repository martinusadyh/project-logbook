package id.web.martinusadyh.logbook.service.impl;

import id.web.martinusadyh.logbook.domain.Category;
import id.web.martinusadyh.logbook.domain.Module;
import id.web.martinusadyh.logbook.service.DefaultService;
import java.util.List;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author martinus
 */
@Service("defaultService")
@Transactional(readOnly=true)
public class DefaultServiceImpl implements DefaultService {
    
    @Autowired private SessionFactory sessionFactory;

    @Override
    public List<Category> findAllCategory(Integer first, Integer pageSize) {
        return sessionFactory.getCurrentSession()
                .createQuery("from Category c order by c.lastUpdateDate desc")
                .setFirstResult(first)
                .setMaxResults(pageSize)
                .list();
    }

    @Override
    public List<Module> findAllModule(Integer first, Integer pageSize) {
        return sessionFactory.getCurrentSession()
                .createQuery("from Module m order by m.lastUpdateDate desc")
                .setFirstResult(first)
                .setMaxResults(pageSize)
                .list();
    }

    @Override
    public Long countCategoryTable() {
        return (Long) sessionFactory.getCurrentSession()
                .createQuery("select count(*) from Category ct")
                .uniqueResult();
    }

    @Override
    public Long countModuleTable() {
        return (Long) sessionFactory.getCurrentSession()
                .createQuery("select count(*) from Module m")
                .uniqueResult();
    }

    @Override
    @Transactional(readOnly=false)
    public void save(Category category) {
        sessionFactory.getCurrentSession().saveOrUpdate(category);
    }

    @Override
    @Transactional(readOnly=false)
    public void save(Module module) {
        sessionFactory.getCurrentSession().saveOrUpdate(module);
    }

    @Override
    public Category findCategoryById(Integer idCategory) {
        return (Category) sessionFactory.getCurrentSession()
                .createQuery("from Category c where c.id = :idCategory")
                .setParameter("idCategory", idCategory)
                .uniqueResult();
    }

    @Override
    public Module findModuleById(Integer idModule) {
        return (Module) sessionFactory.getCurrentSession()
                .createQuery("from Module m where m.id = :idModule")
                .setParameter("idModule", idModule)
                .uniqueResult();
    }
}
