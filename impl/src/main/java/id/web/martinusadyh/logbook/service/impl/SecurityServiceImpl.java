package id.web.martinusadyh.logbook.service.impl;

import id.web.martinusadyh.logbook.domain.security.Permission;
import id.web.martinusadyh.logbook.domain.security.Role;
import id.web.martinusadyh.logbook.service.SecurityService;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author martinus
 */
@Service("securityService")
@Transactional(readOnly=true)
public class SecurityServiceImpl implements SecurityService {
    
    @Autowired private SessionFactory sessionFactory;

    @Override
    @Transactional(readOnly=false)
    public void savePermission(Permission userPermission) {
        sessionFactory.getCurrentSession().saveOrUpdate(userPermission);
    }

    @Override
    public Permission findPermissionByName(String permissionName) {
        return (Permission) sessionFactory.getCurrentSession()
                .createQuery("from Permission p where p.name = :permissionName")
                .setParameter("permissionName", permissionName)
                .uniqueResult();
    }

    @Override
    @Transactional(readOnly=false)
    public void saveRole(Role userRole) {
        sessionFactory.getCurrentSession().saveOrUpdate(userRole);
    }

    @Override
    public Role findRoleByName(String roleName) {
        return (Role) sessionFactory.getCurrentSession()
                .createQuery("from Role r where r.name = :roleName")
                .setParameter("roleName", roleName)
                .uniqueResult();
    }
}
