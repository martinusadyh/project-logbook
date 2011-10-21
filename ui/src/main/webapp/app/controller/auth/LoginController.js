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
        console.log('Init login controller');
        this.control({
            'loginForm button[action=register]': {
                click: this.register
            },
            'registerDialog button[action=register_new_user]': {
                click: this.register_new_user
            }
        });
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
            Ext.MessageBox.alert('Successfully', 
                action.result.msg);
            Ext.getCmp('registerDialog').close();
        } else {
            Ext.Msg.show({
                title:'Error',
                msg: action.result.msg,
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        }
    }
});
