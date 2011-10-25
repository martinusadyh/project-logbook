package id.web.martinusadyh.logbook.service;

import id.web.martinusadyh.logbook.domain.trx.LogBookHeader;
import java.util.Date;
import java.util.List;

/**
 *
 * @author martinus
 */
public interface TrxService {
    
    public List<LogBookHeader> findAllLogBook(Integer first, Integer pageSize);

    public Long countLogBookHeader();

    public LogBookHeader findLogBookHeaderByTransactionDate(Date trxDate);

    public void saveLogBookHeader(LogBookHeader lbh);
    
}
