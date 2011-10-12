package id.web.martinusadyh.logbook.domain;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author martinus
 */
@MappedSuperclass
public class BaseEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id @GeneratedValue
    private Integer id;
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="created_date")
    private Date createdDate = new Date();
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="last_update_date")
    private Date lastUpdateDate = new Date();

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getLastUpdateDate() {
        return lastUpdateDate;
    }

    public void setLastUpdateDate(Date lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final BaseEntity other = (BaseEntity) obj;
        if (this.id != other.id && (this.id == null || !this.id.equals(other.id))) {
            return false;
        }
        if (this.createdDate != other.createdDate && (this.createdDate == null || !this.createdDate.equals(other.createdDate))) {
            return false;
        }
        if (this.lastUpdateDate != other.lastUpdateDate && (this.lastUpdateDate == null || !this.lastUpdateDate.equals(other.lastUpdateDate))) {
            return false;
        }
        return true;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 43 * hash + (this.id != null ? this.id.hashCode() : 0);
        hash = 43 * hash + (this.createdDate != null ? this.createdDate.hashCode() : 0);
        hash = 43 * hash + (this.lastUpdateDate != null ? this.lastUpdateDate.hashCode() : 0);
        return hash;
    }
}