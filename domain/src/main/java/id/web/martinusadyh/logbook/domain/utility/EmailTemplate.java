package id.web.martinusadyh.logbook.domain.utility;

import id.web.martinusadyh.logbook.domain.BaseEntity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 *
 * @author martinus
 */
@Entity
@Table(name="email_template")
public class EmailTemplate extends BaseEntity {
    
    @Column(name="send_to")
    private String sendTo;
    
    @Column(name="carbon_copy")
    private String carbonCopy;
    
    @Column(name="subject")
    private String subject;
    
    @Column(name="email_body")
    private String emailBody;

    public String getCarbonCopy() {
        return carbonCopy;
    }

    public void setCarbonCopy(String carbonCopy) {
        this.carbonCopy = carbonCopy;
    }

    public String getEmailBody() {
        return emailBody;
    }

    public void setEmailBody(String emailBody) {
        this.emailBody = emailBody;
    }

    public String getSendTo() {
        return sendTo;
    }

    public void setSendTo(String sendTo) {
        this.sendTo = sendTo;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }
}