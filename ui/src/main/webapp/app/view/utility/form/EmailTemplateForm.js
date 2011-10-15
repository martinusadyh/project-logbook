Ext.define('logbook.view.utility.form.EmailTemplateForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.emailTemplateForm',
    id: 'emailTemplateForm',
    border: false,
    bodyPadding: 5,
    autoScroll: true,
    width: '30%',
    height: '70%',
    
    fieldDefaults: {
        msgTarget: 'side',  // configuration for validation error msg.
        labelAlign: 'left',
        labelWidth: 120
    },
    
    initComponent: function() {
        // The fields
        this.items = [
            {
                xtype: 'hiddenfield',
                name: 'id',
                id: 'id'
            }, {
                xtype: 'datefield',
                name: 'createdDate',
                format: 'd/m/Y H:i:s',
                hidden: true,
                id: 'createdDate'
            }, {
                xtype: 'datefield',
                name: 'lastUpdateDate',
                format: 'd/m/Y H:i:s',
                hidden: true,
                id: 'lastUpdateDate'
            }, {
                xtype: 'textarea',
                fieldLabel: 'Send To <font color="red">*</font>',
                name: 'sendTo',
                id: 'sendTo',
                anchor: '50%',
                disabled: true,
                allowBlank: false
            }, {
                xtype: 'textarea',
                fieldLabel: 'Cc <font color="red">*</font>',
                name: 'carbonCopy',
                id: 'carbonCopy',
                anchor: '50%',
                disabled: true,
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Subject',
                name: 'subject',
                id: 'subject',
                anchor: '50%',
                disabled: true,
                allowBlank: false
            }, {
                xtype: 'textarea',
                fieldLabel: 'Message <font color="red">*</font>',
                name: 'emailBody',
                id: 'emailBody',
                disabled: true,
                anchor: '50% 50%',
                allowBlank: false
            }
        ];
        
        this.callParent(arguments);
    },
    
    enableDisableComponent: function(widgetId, isEnable) {
        if (isEnable) {
            Ext.getCmp(widgetId).enable(true);
        } else {
            Ext.getCmp(widgetId).disable(true);
        }
    },
    
    enableDisableForm: function(isEnable) {
        if (isEnable) {
            this.enableDisableComponent('sendTo', true);
            this.enableDisableComponent('carbonCopy', true);
            this.enableDisableComponent('subject', true);
            this.enableDisableComponent('emailBody', true);
        } else {
            this.enableDisableComponent('sendTo', false);
            this.enableDisableComponent('carbonCopy', false);
            this.enableDisableComponent('subject', false);
            this.enableDisableComponent('emailBody', false);
        }
    }
});
