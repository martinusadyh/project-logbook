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
            }
        });
    },
    
    edit: function() {
        console.log('Edit clicked');
    },
    save: function() {
        console.log('save clicked');
    }
});
