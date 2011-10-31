Ext.define('logbook.view.entri.form.TableDetailLogBook', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tableDetailLogBook',
    id: 'tableDetailLogBook',
    columnLines: true,
    store: 'LogBookDetailStore',
    
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
                header: 'Time Reporting', 
                dataIndex: 'timeReport'
            }, {
                header: 'Received By', 
                dataIndex: 'userName'
            }, {
                header: 'From', 
                dataIndex: 'fromUser'
            }, {
                header: 'Problem',
                dataIndex: 'problem'
            }, {
                header: 'Suspect',
                dataIndex: 'suspect'
            }, {
                header: 'Solution',
                dataIndex: 'solution'
            }, {
                header: 'Solved Time',
                dataIndex: 'timeSolved'
            }, {
                header: 'Solved By',
                dataIndex: 'solvedBy'
            }, {
                header: 'Category',
                dataIndex: 'categoryName'
            }, {
                header: 'Module',
                dataIndex: 'moduleName'
            }
        ];
        
        this.callParent(arguments);
    }
});
