Ext.define('logbook.view.utility.EmailTemplatePanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.emailTemplatePanel',
    id: 'emailTemplatePanel',
    title: 'Email Template',
    bodyPadding: 5,
    autoScroll: true,
    
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
                xtype: 'textfield',
                fieldLabel: 'Kode Bank <font color="red">*</font>',
                name: 'bankKode',
                id: 'bankKode',
                anchor: '20%',
                disabled: true,
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Nama Bank <font color="red">*</font>',
                name: 'bankNama',
                id: 'bankNama',
                anchor: '50%',
                disabled: true,
                allowBlank: false
            }, {
                xtype: 'textarea',
                fieldLabel: 'Alamat <font color="red">*</font>',
                name: 'bankAlamat',
                id: 'bankAlamat',
                anchor: '50% 10%',
                disabled: true,
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'No. Telp',
                name: 'bankTelp',
                id: 'bankTelp',
                disabled: true,
                anchor: '30%'
            }, {
                xtype: 'textarea',
                fieldLabel: 'Keterangan',
                name: 'bankNote',
                id: 'bankNote',
                disabled: true,
                anchor: '50% 10%'
            }
        ];
        
        this.tools = [{
            type: 'help',
            handler: function() {
                // show help here
            }
        }];
        
        this.callParent(arguments);
    }
});
