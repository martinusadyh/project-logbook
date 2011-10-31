Ext.define('logbook.controller.utility.UserProfileController', {
    extend: 'Ext.app.Controller',
    
    views: [
        'utility.UserProfilePanel',
        'utility.form.UserProfileForm'
    ],
    
    init: function() {
        this.control({
            'userProfilePanel button[action=edit]': {
                click: this.edit
            },
            'userProfilePanel button[action=save]': {
                click: this.save
            },
            'userProfilePanel button[action=cancel]': {
                click: this.cancel
            }
        });
    },
    
    edit: function() {
        Ext.getCmp('userProfileForm').enableDisableForm(true);
        Ext.getCmp('userProfilePanel').btnEditOnClick();
    },
    save: function() {
        // TODO: 
        // Duplicate code in (logbook.controller.auth.LoginController#register_new_user)
        // We need refactor this code, D R Y (Don't Repeat Yourself) Please :(
        // cek this form is valid 
        if (Ext.getCmp('userProfileForm').getForm().isValid()) {
            var username = Ext.getCmp('userName').getValue();
            var passUser = Ext.getCmp('password').getValue();
            
            var tmpPass = passUser + '{' + username + '}';
            
            var encryptedUserPass = hex_md5(tmpPass);
            
            // update the field
            Ext.getCmp('password').setValue(encryptedUserPass);
            
            // TODO: We need use store for all CRUD operation.
            Ext.getCmp('userProfileForm').getForm().submit({
                waitMsg : 'Inserting new record ...',
                method  : 'POST',
                url     : '/logbook/ui/json/utility/userprofile/save',
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
            Ext.getCmp('userProfileForm').activated_tab_handler();
        } else {
            console.log('error ' + action.result);
            Ext.Msg.show({
                title:'Error',
                msg: action.result.msg,
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        }
    },
    cancel: function() {
        Ext.getCmp('userProfileForm').enableDisableForm(false);
        Ext.getCmp('userProfilePanel').btnSaveOnClick();
    }
});
