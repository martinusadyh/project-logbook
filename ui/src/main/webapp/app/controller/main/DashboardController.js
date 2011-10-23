Ext.define('logbook.controller.main.DashboardController', {
    extend: 'Ext.app.Controller',
    
    views: [
        'main.DashboardPanel',
        'main.ToolbarPanel',
        'main.CenterPanel',
        'main.BottomPanel',
        'entri.EntriLogBookPanel',
        'entri.form.TableLogBook',
        'utility.EmailTemplatePanel',
        'utility.UserProfilePanel'
    ],
    
    init: function() {
        this.control({
            'toolBarPanel menuitem[action=logout]': {
                click: this.logout
            },
            
            // entri logbook menu
            'toolBarPanel menuitem[action=entri_logbook]': {
                click: this.entri_logbook
            },
            
            // utility menu
            'toolBarPanel menuitem[action=email_template]': {
                click: this.email_template
            },
            'toolBarPanel menuitem[action=user_profile]': {
                click: this.user_profile
            }
        });
    },
    
    addPanel: function(screenId) {
        Ext.getCmp('centerPanel').showForm(screenId);
    },
    
    logout: function(menuitem) {
        window.location = 'j_spring_security_logout';
    },
    
    // entri logbook menu
    entri_logbook: function(menuitem) {
        this.addPanel('entriLogBookPanel');
    },
    
    // utility menu
    user_profile: function(menuitem) {
        this.addPanel('userProfilePanel');
    },
    email_template: function(menuitem) {
        this.addPanel('emailTemplatePanel');
    }
});
