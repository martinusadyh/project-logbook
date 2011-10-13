package id.web.martinusadyh.logbook.service;

import id.web.martinusadyh.logbook.domain.utility.EmailTemplate;
import id.web.martinusadyh.logbook.domain.utility.UserProfile;

/**
 *
 * @author martinus
 */
public interface UtilityService {
    
    public void saveEmailTemplate(EmailTemplate emailTemplate);
    public EmailTemplate getCurrentEmailTemplate(Integer id);
    
    public void saveUserProfile(UserProfile userProfile);
    public UserProfile getCurrentProfile(Integer id);
}