package id.web.martinusadyh.logbook.domain.security;

import id.web.martinusadyh.logbook.domain.BaseEntity;
import java.io.Serializable;

/**
 *
 * @author martinus
 */
public class Permission extends BaseEntity implements Serializable {
    
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
