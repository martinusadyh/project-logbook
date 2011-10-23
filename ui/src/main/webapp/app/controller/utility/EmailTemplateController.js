Ext.define('logbook.controller.utility.EmailTemplateController', {
    extend: 'Ext.app.Controller',
    stores: [
        'EmailTemplateStore'
    ],
    models: [
        'EmailTemplateModel'
    ],
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
        if (Ext.getCmp('emailTemplateForm').getForm().isValid()) {
            Ext.getCmp('emailTemplateForm').getForm().submit({
                waitMsg : 'Inserting new record ...',
                method  : 'POST',
                url     : '/logbook/ui/json/utility/emailtemplate/save',
                scope   : this,
                success : function(form, action) {
                    this.submitFormResult(form, action);
                }, 
                failure : function(form, action) {
                    this.submitFormResult(form, action);
                }
            });
        } else {
            Ext.MessageBox.alert('Errors', 
                'Kolom bertanda (<font color="red">*</font>) harus diisi !!');
        }
    },
    submitFormResult: function(form, action) {
        if (action.result.success) {
            this.cancel();
            Ext.getCmp('emailTemplateForm').activated_tab_handler();
        } else {
            Ext.Msg.show({
                title:'Error',
                msg: action.result.msg,
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        }
    },
    cancel: function() {
        Ext.getCmp('emailTemplateForm').enableDisableForm(false);
        Ext.getCmp('emailTemplatePanel').btnSaveOnClick();
    }
});
