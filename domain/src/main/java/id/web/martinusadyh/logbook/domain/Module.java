package id.web.martinusadyh.logbook.domain;

import id.web.martinusadyh.logbook.domain.trx.LogBookDetails;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.hibernate.annotations.Index;

/**
 *
 * @author martinus
 */
@Entity
@Table(name="module")
@org.hibernate.annotations.Table(
        appliesTo="module",
        indexes={
            @Index(name="idx_module_name", columnNames={"module_name"})
        }
)
public class Module extends BaseEntity {
    
    @Column(name="module_name")
    private String moduleName;
    
    @OneToMany(mappedBy = "module")
    private List<LogBookDetails> logBookDetails;

    public List<LogBookDetails> getLogBookDetails() {
        return logBookDetails;
    }

    public void setLogBookDetails(List<LogBookDetails> logBookDetails) {
        this.logBookDetails = logBookDetails;
    }

    public String getModuleName() {
        return moduleName;
    }

    public void setModuleName(String moduleName) {
        this.moduleName = moduleName;
    }
}
