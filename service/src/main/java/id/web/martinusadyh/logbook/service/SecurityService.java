package id.web.martinusadyh.logbook.service;

import id.web.martinusadyh.logbook.domain.security.Permission;
import id.web.martinusadyh.logbook.domain.security.Role;

/**
 *
 * @author martinus
 */
public interface SecurityService {

    public void savePermission(Permission userPermission);

    public Permission findPermissionByName(String permissionName);

    public void saveRole(Role userRole);

    public Role findRoleByName(String roleName);
    
}
