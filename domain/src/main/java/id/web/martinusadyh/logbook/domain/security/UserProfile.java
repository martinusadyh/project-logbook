package id.web.martinusadyh.logbook.domain.security;

import id.web.martinusadyh.logbook.domain.BaseEntity;
import id.web.martinusadyh.logbook.domain.trx.LogBookDetails;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

/**
 *
 * @author martinus
 */
@Entity
@Table(name="user_profile")
public class UserProfile extends BaseEntity {
    
    @Column(name="username", unique=true)
    private String userName;
    
    @Column(name="first_name")
    private String firstName;
    
    @Column(name="last_name")
    private String lastName;
    
    @Column(name="email_address")
    private String emailAddress;
    
    @Column(name="password")
    private String password;
    
    @ManyToOne(fetch=FetchType.EAGER)
    @Fetch(FetchMode.JOIN)
    @JoinColumn(name="id_role", nullable=false)
    private Role role;

    @OneToMany(mappedBy = "solvedBy")
    private List<LogBookDetails> logBooksSolvedBy;
    
    @OneToMany(mappedBy = "receivedBy")
    private List<LogBookDetails> logBooksReceivedBy;

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<LogBookDetails> getLogBooksReceivedBy() {
        return logBooksReceivedBy;
    }

    public void setLogBooksReceivedBy(List<LogBookDetails> logBooksReceivedBy) {
        this.logBooksReceivedBy = logBooksReceivedBy;
    }

    public List<LogBookDetails> getLogBooksSolvedBy() {
        return logBooksSolvedBy;
    }

    public void setLogBooksSolvedBy(List<LogBookDetails> logBooksSolvedBy) {
        this.logBooksSolvedBy = logBooksSolvedBy;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
