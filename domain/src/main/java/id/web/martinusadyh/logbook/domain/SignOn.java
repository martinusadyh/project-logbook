package id.web.martinusadyh.logbook.domain;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;

/**
 *
 * @author martinus
 */
@Entity
@Table(name="signon")
public class SignOn extends BaseEntity {
    
    private String username;
    
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date loginTime;

    public Date getLoginTime() {
        return loginTime;
    }

    public void setLoginTime(Date loginTime) {
        this.loginTime = loginTime;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}