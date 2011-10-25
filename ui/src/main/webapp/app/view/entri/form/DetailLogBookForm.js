Ext.define('logbook.view.entri.form.DetailLogBookForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.detailLogBookForm',
    id: 'detailLogBookForm',
    bodyPadding: 5,
    autoScroll: true,
    
    layout: {
        type: 'table',
        columns: 3
    },
    
    fieldDefaults: {
        msgTarget: 'side',  // configuration for validation error msg.
        labelAlign: 'left'
    },
    
    initComponent: function() {
        this.items = [{
            xtype: 'timefield',
            fieldLabel: 'Time Reporting <font color="red">*</font>',
            format: 'H:i',
            name: 'timeReport',
            id: 'timeReporting',
            anchor: '100%',
            //disabled: true,
            allowBlank: false
        }, {
            xtype: 'combobox',
            fieldLabel: 'Received By <font color="red">*</font>',
            name: 'idReceived',
            id: 'receivedBy',
            displayField: 'userName',
            valueField: 'id',
            editable: false,
            store: 'UserProfileStore'
        }, {
            xtype: 'textfield',
            fieldLabel: 'From <font color="red">*</font>',
            name: 'fromUser',
            id: 'fromUser'
        }, {
            xtype: 'textarea',
            fieldLabel: 'Problem',
            name: 'problem',
            id: 'problem',
            width: 790,
            colspan: 3
        }, {
            xtype: 'textarea',
            fieldLabel: 'Suspect',
            name:'suspect',
            id: 'suspect',
            width: 790,
            colspan: 3
        }, {
            xtype: 'textarea',
            fieldLabel: 'Solution',
            name: 'solution',
            id: 'solution',
            width: 790,
            colspan: 3
        }, {
            xtype: 'timefield',
            fieldLabel: 'Time Solved <font color="red">*</font>',
            format: 'H:i',
            name: 'timeSolve',
            id: 'timeSolved',
            anchor: '100%',
            allowBlank: false
        }, {
            xtype: 'combobox',
            fieldLabel: 'Solved By <font color="red">*</font>',
            name: 'idSolvedBy',
            id: 'solvedBy',
            displayField: 'userName',
            valueField: 'id',
            editable: false,
            store: 'UserProfileStore',
            colspan: 2
        }, {
            xtype: 'combobox',
            fieldLabel: 'Category <font color="red">*</font>',
            name: 'idCategory',
            displayField: 'categoryName',
            valueField: 'id',
            editable: false,
            store: 'CategoryStore'
        }, {
            xtype: 'combobox',
            fieldLabel: 'Module <font color="red">*</font>',
            name: 'idModule',
            displayField: 'moduleName',
            valueField: 'id',
            editable: false,
            store: 'ModuleStore'
        }];
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            items: [{
                xtype: 'button',
                text: 'Save',
                iconCls: 'icon-save',
                action:'save_detail_logbook'
            }, {
                xtype: 'button',
                text: 'Delete',
                disabled: true,
                iconCls: 'icon-delete',
                action:'delete_detail_logbook'
            }, {
                xtype: 'button',
                text: 'Send Email',
                iconCls: 'icon-email',
                action: 'send_email'
            }, {
                xtype: 'hiddenfield',
                name: 'sysDate',
                id: 'sysDate'
            }]
        }];
        
        this.callParent(arguments);
    }
});
