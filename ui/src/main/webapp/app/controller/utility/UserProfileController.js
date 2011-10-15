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
        this.cancel();
    },
    cancel: function() {
        Ext.getCmp('userProfileForm').enableDisableForm(false);
        Ext.getCmp('userProfilePanel').btnSaveOnClick();
    }
});
