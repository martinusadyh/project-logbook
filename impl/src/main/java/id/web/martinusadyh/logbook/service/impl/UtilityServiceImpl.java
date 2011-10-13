package id.web.martinusadyh.logbook.service.impl;

import id.web.martinusadyh.logbook.domain.utility.EmailTemplate;
import id.web.martinusadyh.logbook.domain.utility.UserProfile;
import id.web.martinusadyh.logbook.service.UtilityService;
import java.util.Date;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author martinus
 */
@Service("utilityService")
@Transactional(readOnly=true)
public class UtilityServiceImpl implements UtilityService {
    
    @Autowired private SessionFactory sessionFactory;

    @Override
    public void saveEmailTemplate(EmailTemplate emailTemplate) {
        if (emailTemplate.getId() != null) {
            emailTemplate.setLastUpdateDate(new Date());
        }
        sessionFactory.getCurrentSession().saveOrUpdate(emailTemplate);
    }

    @Override
    public EmailTemplate getCurrentEmailTemplate(Integer id) {
        return (EmailTemplate) sessionFactory.getCurrentSession()
                .createQuery("from EmailTemplate t where t.id = :templateId")
                .setParameter("templateId", id)
                .uniqueResult();
    }

    @Override
    public void saveUserProfile(UserProfile userProfile) {
        if (userProfile.getId() != null) {
            userProfile.setLastUpdateDate(new Date());
        }
        sessionFactory.getCurrentSession().saveOrUpdate(userProfile);
    }

    @Override
    public UserProfile getCurrentProfile(Integer id) {
        return (UserProfile) sessionFactory.getCurrentSession()
                .createQuery("from UserProfile u where u.id = :idUser")
                .setParameter("idUser", id)
                .uniqueResult();
    }
    
}
