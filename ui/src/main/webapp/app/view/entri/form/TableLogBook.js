Ext.define('logbook.view.entri.form.TableLogBook', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tableLogBook',
    id: 'tableLogBook',
    title: 'Tabel LogBook',
    columnLines: true,
    store: 'NasabahStore',
    
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
                header: 'Kode', 
                dataIndex: 'nbKode'
            }, {
                header: 'Nama', 
                dataIndex: 'nbNama'
            }, {
                header: 'Pengenal', 
                dataIndex: 'nbTanda',
                sortable: false
            }, {
                header: 'No. Pengenal', 
                dataIndex: 'nbNoTanda',
                sortable: false
            }, {
                header: 'Masa Berlaku', 
                dataIndex: 'nbTgTanda',
                sortable: false
            }, {
                header: 'Sex', 
                dataIndex: 'nbSex', 
                hidden: true,
                sortable: false
            }, {
                header: 'Tanggal Lahir', 
                dataIndex: 'nbTglLahir',
                sortable: false
            }, {
                header: 'Kota Lahir', 
                dataIndex: 'nbKtLahir',
                sortable: false
            }, {
                header: 'Agama', 
                dataIndex: 'nbAgama',
                sortable: false
            }, {
                header: 'Status Kawin', 
                dataIndex: 'nbStatus',
                hidden: true,
                sortable: false
            }, {
                header: 'Istri/Suami', 
                dataIndex: 'nbIstri', 
                hidden: true,
                sortable: false
            }, {
                header: 'Pekerjaan', 
                dataIndex: 'nbKerja', 
                hidden: true,
                sortable: false
            }, {
                header: 'Tanggungan', 
                dataIndex: 'nbTanggungan', 
                hidden: true,
                sortable: false
            }, {
                header: 'Status Rumah', 
                dataIndex: 'nbRumah', 
                hidden: true,
                sortable: false
            }, {
                header: 'Alamat', 
                dataIndex: 'nbAlamat',
                hidden: true,
                sortable: false
            }, {
                header: 'RT/RW', 
                dataIndex: 'nbRtRw', 
                hidden: true,
                sortable: false
            }, {
                header: 'Kode Pos', 
                dataIndex: 'nbKodePos', 
                hidden: true,
                sortable: false
            }, {
                header: 'Kelurahan', 
                dataIndex: 'nbDesa', 
                hidden: true,
                sortable: false
            }, {
                header: 'Propinsi', 
                dataIndex: 'nbProp', 
                hidden: true,
                sortable: false
            }, {
                header: 'Kecamatan', 
                dataIndex: 'nbKec',
                hidden: true,
                sortable: false
            }, {
                header: 'NPWP', 
                dataIndex: 'nbNpWp', 
                hidden: true,
                sortable: false
            }, {
                header: 'Kota', 
                dataIndex: 'nbKota', 
                hidden: true,
                sortable: false
            }, {
                header: 'Telp', 
                dataIndex: 'nbTelp', 
                hidden: true,
                sortable: false
            }, {
                header: 'Pemasaran', 
                dataIndex: 'idDasar',
                hidden: true,
                sortable: false
            }, {
                header: 'Keterangan', 
                dataIndex: 'nbNote',
                hidden: true,
                sortable: false
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
