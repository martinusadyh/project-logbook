package id.web.martinusadyh.logbook.service;

import id.web.martinusadyh.logbook.domain.utility.EmailTemplate;
import id.web.martinusadyh.logbook.domain.security.UserProfile;
import java.util.List;

/**
 *
 * @author martinus
 */
public interface UtilityService {
    
    public void saveEmailTemplate(EmailTemplate emailTemplate);
    public EmailTemplate getCurrentEmailTemplate();
    
    public void saveUserProfile(UserProfile userProfile);
    public UserProfile getCurrentProfile(Integer id);

    public Long countUserTable();
    public List<UserProfile> findAllUser(Integer first, Integer pageSize);

    public UserProfile findUserByName(String userName);
}
