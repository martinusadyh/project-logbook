package id.web.martinusadyh.logbook.domain.trx;

import id.web.martinusadyh.logbook.domain.BaseEntity;
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
    @Column(name="modul_name")
    private String modulName;
    
    @OneToMany(mappedBy = "category")
    private List<LogBook> logBooks;

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public List<LogBook> getLogBooks() {
        return logBooks;
    }

    public void setLogBooks(List<LogBook> logBooks) {
        this.logBooks = logBooks;
    }

    public String getModulName() {
        return modulName;
    }

    public void setModulName(String modulName) {
        this.modulName = modulName;
    }
}
