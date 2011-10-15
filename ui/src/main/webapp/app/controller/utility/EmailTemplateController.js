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
