Ext.define('logbook.view.entri.form.TableLogBook', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tableLogBook',
    id: 'tableLogBook',
    title: 'Tabel LogBook',
    columnLines: true,
    store: 'LogBookStore',
    
    initComponent: function() {
        this.columns = [
            Ext.create('Ext.grid.RowNumberer'),
            {
                header: 'ID', 
                dataIndex: 'id', 
                hidden: true,
                flex: 1
            }, {
                header: 'Created Date', 
                dataIndex: 'createdDate', 
                hidden: true,
                flex: 1
            }, {
                header: 'Updated Date', 
                dataIndex: 'lastUpdateDate', 
                hidden: true,
                flex: 1
            }, {
                header: 'Date', 
                dataIndex: 'logDate'
            }, {
                header: 'Total', 
                dataIndex: 'totalLaporan'
            }
        ];
        
        this.bbar = {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            store: this.store,
            displayInfo: true
        };
        
        this.callParent(arguments);
    }
});
