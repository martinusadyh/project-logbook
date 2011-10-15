Ext.define('logbook.controller.utility.UserProfileController', {
    extend: 'Ext.app.Controller',
    
    views: [
        'utility.UserProfilePanel',
        'utility.form.UserProfileForm'
    ],
    
    init: function() {
        console.log('Init dashboard controller');
    }
});
