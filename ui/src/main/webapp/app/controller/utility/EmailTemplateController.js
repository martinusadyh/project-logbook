Ext.define('logbook.controller.utility.EmailTemplateController', {
    extend: 'Ext.app.Controller',
    
    views: [
        'utility.EmailTemplatePanel',
        'utility.form.EmailTemplateForm'
    ],
    
    init: function() {
        this.control({
            'emailTemplatePanel button[action=edit]': {
                click: this.edit
            },
            'emailTemplatePanel button[action=save]': {
                click: this.save
            },
            'emailTemplatePanel button[action=cancel]': {
                click: this.cancel
            }
        });
    },
    
    edit: function() {
        Ext.getCmp('emailTemplateForm').enableDisableForm(true);
        Ext.getCmp('emailTemplatePanel').btnEditOnClick();
    },
    save: function() {
        this.cancel();
    },
    cancel: function() {
        Ext.getCmp('emailTemplateForm').enableDisableForm(false);
        Ext.getCmp('emailTemplatePanel').btnSaveOnClick();
    }
});
