package id.web.martinusadyh.logbook.domain.security;

import id.web.martinusadyh.logbook.domain.BaseEntity;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import org.hibernate.annotations.Cascade;

/**
 *
 * @author martinus
 */
@Entity
@Table(name="role")
public class Role extends BaseEntity implements Serializable {
    
    @Column(unique = true, nullable = false)
    private String name;
    
    @ManyToMany(cascade = CascadeType.ALL)
    @Cascade(org.hibernate.annotations.CascadeType.DELETE_ORPHAN)
    @JoinTable(name = "role_permission",
        joinColumns =
        @JoinColumn(name = "id_role"),
        inverseJoinColumns =
        @JoinColumn(name = "id_permission"))
    private Set<Permission> daftarPermission = new HashSet<Permission>();
    
    public Boolean hasPermission(Permission permission) {
        if (permission == null || permission.getId() == null) {
            return false;
        }
        for (Permission p : daftarPermission) {
            if (permission.getId().equals(p.getId())) {
                return true;
            }
        }
        return false;
    }

    public Set<Permission> getDaftarPermission() {
        return daftarPermission;
    }

    public void setDaftarPermission(Set<Permission> daftarPermission) {
        this.daftarPermission = daftarPermission;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
