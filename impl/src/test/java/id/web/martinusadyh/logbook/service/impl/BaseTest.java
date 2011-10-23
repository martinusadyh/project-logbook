package id.web.martinusadyh.logbook.service.impl;

import id.web.martinusadyh.logbook.service.DefaultService;
import id.web.martinusadyh.logbook.service.SecurityService;
import id.web.martinusadyh.logbook.service.TrxService;
import id.web.martinusadyh.logbook.service.UtilityService;
import org.junit.BeforeClass;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class BaseTest {
    protected static AbstractApplicationContext ctx;
    
    protected static DefaultService defaultService;
    protected static TrxService trxService;
    protected static UtilityService utilityService;
    protected static SecurityService securityService;

    @BeforeClass
    public static void init() {
        ctx = new ClassPathXmlApplicationContext(new String[] {
            "classpath*:applicationContext.xml" 
        });
        
        defaultService = (DefaultService) ctx.getBean("defaultService");
        trxService = (TrxService) ctx.getBean("trxService");
        utilityService = (UtilityService) ctx.getBean("utilityService");
        securityService = (SecurityService) ctx.getBean("securityService");
    }
}
