package id.web.martinusadyh.logbook.service.impl;

import java.util.Set;
import java.util.HashSet;
import id.web.martinusadyh.logbook.domain.security.Permission;
import id.web.martinusadyh.logbook.domain.security.Role;

import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author martinus
 */
public class SecurityCrudTest extends BaseTest {
    
    @Test
    public void savePermission() {
        Permission userPermission = new Permission();
        userPermission.setName("USER_PAGE");
        securityService.savePermission(userPermission);
        
        Permission result = securityService.findPermissionByName("USER_PAGE");
        assertEquals(userPermission.getName(), result.getName());
    }
    
    @Test
    public void saveRole() {
        Role userRole = new Role();
        userRole.setName("USER");
        
        // we just need assign one permission for this role
        Permission result = securityService.findPermissionByName("USER_PAGE");
        Set<Permission> daftarPermission = new HashSet<Permission>();
        daftarPermission.add(result);
        
        userRole.setDaftarPermission(daftarPermission);
        
        // save user
        securityService.saveRole(userRole);
        
        Role resultRole = securityService.findRoleByName("USER");
        
        assertEquals(userRole.getName(), resultRole.getName());
    }
    
}
