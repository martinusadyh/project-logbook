Ext.define('logbook.controller.auth.LoginController', {
    extend: 'Ext.app.Controller',
    stores: [
        'UserProfileStore'
    ],
    models: [
        'UserProfileModel'
    ],
    views: [
        'auth.Login',
        'auth.RegisterDialog',
        'utility.form.UserProfileForm'
    ],
    
    init: function() {
        this.control({
            'loginForm button[action=register]': {
                click: this.register
            },
            'loginForm button[action=login]': {
                click: this.login
            },
            'registerDialog button[action=register_new_user]': {
                click: this.register_new_user
            }
        });
    },
    login: function() {
        if (Ext.getCmp('loginForm').getForm().isValid()) {
            // TODO: We need use store for all CRUD operation.
            Ext.getCmp('loginForm').getForm().submit({
                waitMsg : 'Checking user ...',
                method  : 'POST',
                url     : 'j_spring_security_check',
                scope   : this,
                success : function(form, action) {
                    window.location = action.result.msg;
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
    register: function() {
        var registerDialogWindow = Ext.widget('registerDialog');
        // enable userProfile form first (for registration only)
        Ext.getCmp('userProfileForm').enableDisableForm(true);
        registerDialogWindow.show();
    },
    register_new_user: function() {
        // cek this form is valid 
        if (Ext.getCmp('userProfileForm').getForm().isValid()) {
            var username = Ext.getCmp('userName').getValue();
            var passUser = Ext.getCmp('password').getValue();
            var passEmail = Ext.getCmp('passwordEmail').getValue();
            
            var tmpPass = passUser + '{' + username + '}';
            
            var encryptedUserPass = hex_md5(tmpPass);
            var encryptedEmailPass = hex_md5(username, passEmail);
            
            // update the field
            Ext.getCmp('password').setValue(encryptedUserPass);
            Ext.getCmp('passwordEmail').setValue(encryptedEmailPass);
            
            // TODO: We need use store for all CRUD operation.
            Ext.getCmp('userProfileForm').getForm().submit({
                waitMsg : 'Inserting new record ...',
                method  : 'POST',
                url     : '/logbook/ui/json/utility/userprofile/save',
                scope   : this,
                success : function(form, action) {
                    this.submitFormResult(form, action);
                    Ext.getCmp('registerDialog').close();
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
            Ext.MessageBox.alert('Successfully', 
                action.result.msg);
        } else {
            console.log('error ' + action.result);
            Ext.Msg.show({
                title:'Error',
                msg: action.result.msg,
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        }
    }
});
