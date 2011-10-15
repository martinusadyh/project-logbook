Ext.define('logbook.controller.main.DashboardController', {
    extend: 'Ext.app.Controller',
    
    views: [
        'main.DashboardPanel',
        'main.ToolbarPanel',
        'main.CenterPanel',
        'main.BottomPanel',
        'utility.EmailTemplatePanel',
        'utility.UserProfilePanel'
    ],
    
    init: function() {
        console.log('Init dashboard controller');
        this.control({
            'toolBarPanel menuitem[action=login]': {
                click: this.login
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
    
    login: function(menuitem) {
        console.log('login button clicked');
    },
    
    // entri logbook menu
    entri_logbook: function(menuitem) {
        console.log('entri logbook clicked');
        //this.addPanel('logbookPanel');
    },
    
    // utility menu
    user_profile: function(menuitem) {
        this.addPanel('userProfilePanel');
    },
    email_template: function(menuitem) {
        this.addPanel('emailTemplatePanel');
    }
});
