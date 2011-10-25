package id.web.martinusadyh.logbook.service.impl;

import id.web.martinusadyh.logbook.domain.trx.LogBookHeader;
import id.web.martinusadyh.logbook.service.TrxService;
import java.util.Date;
import java.util.List;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author martinus
 */
@Service("trxService")
@Transactional(readOnly=true)
public class TrxServiceImpl implements TrxService {
    
    @Autowired private SessionFactory sessionFactory;

    @Override
    public List<LogBookHeader> findAllLogBook(Integer first, Integer pageSize) {
        return sessionFactory.getCurrentSession()
                .createQuery("from LogBookHeader lh inner join fetch lh.logBookDetails order by lh.lastUpdateDate desc")
                .setFirstResult(first)
                .setMaxResults(pageSize)
                .list();
    }

    @Override
    public Long countLogBookHeader() {
        return (Long) sessionFactory.getCurrentSession()
                .createQuery("select count(lh.id) from LogBookHeader lh")
                .uniqueResult();
    }

    @Override
    public LogBookHeader findLogBookHeaderByTransactionDate(Date trxDate) {
        return (LogBookHeader) sessionFactory.getCurrentSession()
                .createQuery("from LogBookHeader lbh inner join fetch lbh.logBookDetails where date(lbh.logDate) = date(:trxDate)")
                .setParameter("trxDate", trxDate)
                .uniqueResult();
    }

    @Override
    @Transactional(readOnly=false)
    public void saveLogBookHeader(LogBookHeader lbh) {
        if (lbh.getId() != null) {
            lbh.setLastUpdateDate(new Date());
        }
        sessionFactory.getCurrentSession().saveOrUpdate(lbh);
    }
}
