var Title = $('.tabs-selected a span').text();
var Module = 'import';
var PostModule = 'point/' + Module;
var DataGrid = '#' + Module + 'Grid';
var ToolbarT = '#' + Module + 'Toolbar';
var DiaLog = '#' + Module + 'DiaLog';
var Form = '#' + Module + 'Form';
var SearchForm = "#" + Module + 'SearchForm';
var SeatchType = "company";
Cache.set('GridType', 'datagrid');
var columns = [[
    {field: 'id', hidden: true},
    {title: '手机', field: 'phone', width: '20%', align: 'left', sortable: true},
    {title: '积分', field: 'balance', width: '20%', align: 'left', sortable: true},
    {title: '备注', field: 'describe', width: '20%', align: 'left', sortable: true},
    {
        title: '错误信息', field: 'remarks', width: '20%', align: 'left', sortable: true,
        formatter: function (value, row) {
            return '<span style="color: red">' + row.remarks + '</span>';
        }
    },
    {
        title: '类型', field: 'type', width: '5%', align: 'left', sortable: true,
        formatter: function (value, row) {
            return row.type == 1 ? '加分' : '减分';
        }
    },
    {
        title: '状态', field: 'status', width: '5%', align: 'left', sortable: true,
        formatter: function (value, row) {
            dump(row.status);
            if (row.status == 1) {
                return '通过检查';
            } else {

                return '检测失败!';
            }
            // $('#loaddata').hide();
        }

    }
]];


$(DataGrid).datagrid({
    url: Qrck.baseApiUrl + PostModule + '/index',
    method: 'get',
    iconCls: 'icon-view',
    height: 650,
    width: function () {
        return document.body.clientWidth * 0.9
    },
    nowrap: true,
    autoRowHeight: false,
    selectOnCheck: false,
    checkOnSelect: false,
    fit: true,
    fitColumns: true,
    striped: true,
    //ctrlSelect:true,
    singleSelect: true,
    collapsible: true,
    rownumbers: true,
    remoteSort: false,
    pagination: true,
    pageSize: 30,
    pageList: [30, 60, 90],
    sortName: 'status',
    sortOrder: 'asc',
    idField: 'id',
    columns: columns,

    toolbar: ToolbarT,
    onLoadSuccess: function (data) {
        if (data.rows.length > 0) {
            data.rows[0].status == 1 ? $('#loaddata').show() : $('#loaddata').hide();
        }
    },
    onSelect: function () {
        $(DataGrid).datagrid('clearChecked');
    },
    onCheck: function () {
        $(DataGrid).datagrid('clearSelections');
    },
    onCheckAll: function () {
        $(DataGrid).datagrid('clearSelections');
    }

});


$('.easyui-textbox').textbox({
    width: 300
});
$('.easyui-datebox').datebox({
    width: 200
});

