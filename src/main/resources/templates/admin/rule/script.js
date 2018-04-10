var Title = $('.tabs-selected a span').text();
var Module = 'rule';
var PostModule = 'admin/' + Module;
var DataGrid = '#' + Module + 'Grid';
var ToolbarT = '#' + Module + 'Toolbar';
var DiaLog = '#' + Module + 'DiaLog';
var Form = '#' + Module + 'Form';
var SearchForm = "#" + Module + 'SearchForm';
var SeatchType = "company";
Cache.set('GridType', 'treegrid');
Cache.set('ModuleInfo', {Module: Module});
var columns = [[
    {field: 'ck', checkbox: true},
    {title: '名称', field: 'title', width: '30%', align: 'center', sortable: true},
    {title: '节点', field: 'alink', width: '20%', align: 'left', sortable: true},
    {title: '类型', field: 'type', width: '10%', align: 'left', sortable: true},
    {
        title: '状态', field: 'status', width: '30%', align: 'left', sortable: true, formatter: function (value, row) {

            if (row.status === 1) {
                return '<a href="javascript:void(0)" onclick="Option.setStatus(2,' + row.id + ')">启用</a>';
            }

            if (row.status === 2) {
                return '<a href="javascript:void(0)" onclick="Option.setStatus(1,' + row.id + ')">禁用</a>';
            }
        }
    },

    {
        title: '操作', field: 'id', width: '8%', align: 'center',
        formatter: function (value) {

            return '<a href="javascript:void(0)" onclick="Option.UpOpen(' + value + ')">编辑</a>' +
                '&nbsp;&nbsp;&nbsp;' +
                '<a href="javascript:void(0)" onclick="Option.setStatus(9,' + value + ')">删除</a>';

        }
    }
]];


$(DataGrid).treegrid({
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
    sortName: 'id',
    sortOrder: 'desc',
    idField: 'id',
    treeField: 'title',
    columns: columns,

    toolbar: ToolbarT,
    onLoadSuccess: function (rows, data) {
    },
    onSelect: function () {
        $(DataGrid).treegrid('clearChecked');
    },
    onCheck: function () {
        $(DataGrid).treegrid('clearSelections');
    },
    onCheckAll: function () {
        $(DataGrid).treegrid('clearSelections');
    }

});


$('.easyui-textbox').textbox({
    width: 300
});
$('.easyui-datebox').datebox({
    width: 200
});

