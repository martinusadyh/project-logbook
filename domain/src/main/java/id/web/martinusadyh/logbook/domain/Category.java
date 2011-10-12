package id.web.martinusadyh.logbook.domain;

import id.web.martinusadyh.logbook.domain.BaseEntity;
import id.web.martinusadyh.logbook.domain.trx.LogBookDetails;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author martinus
 */
@Entity
@Table(name="category")
public class Category extends BaseEntity {
    
    @Column(name="category_name")
    private String categoryName;
    
    @OneToMany(mappedBy = "category")
    private List<LogBookDetails> logBooksBookDetails;

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public List<LogBookDetails> getLogBooksBookDetails() {
        return logBooksBookDetails;
    }

    public void setLogBooksBookDetails(List<LogBookDetails> logBooksBookDetails) {
        this.logBooksBookDetails = logBooksBookDetails;
    }
}
