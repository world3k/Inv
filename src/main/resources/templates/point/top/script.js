var Title = $('.tabs-selected a span').text();
var Module = 'top';
var PostModule = 'point/' + Module;
var DataGrid = '#' + Module + 'Grid';
var ToolbarT = '#' + Module + 'Toolbar';
var DiaLog = '#' + Module + 'DiaLog';
var Form = '#' + Module + 'Form';
var SearchForm = "#" + Module + 'SearchForm';
var SeatchType = "company";

var columns = [[
    {field: 'ck', checkbox: true},

    {title: '用户ID', field: 'user_id', width: '12%', align: 'left', sortable: true},
    {title: '现有积分', field: 'balance', width: '12%', align: 'left', sortable: true},
    {title: '日排名', field: 'ranking', width: '12%', align: 'left', sortable: true},
    {title: '周排名', field: 'ranking', width: '12%', align: 'left', sortable: true},
    {title: '月排名', field: 'ranking', width: '12%', align: 'left', sortable: true},
    {title: '年排名', field: 'ranking', width: '12%', align: 'left', sortable: true},
    {title: '时间', field: 'created_time', width: '12%', align: 'left', sortable: true},

    {
        title: '操作', field: 'id', width: '8%', align: 'center',
        formatter: function (value) {

            return '<a href="javascript:void(0)" onclick="Option.UpOpen(' + value + ')">编辑</a>' +
                '&nbsp;&nbsp;&nbsp;' +
                '<a href="javascript:void(0)" onclick="Option.setStatus(9,' + value + ')">删除</a>';

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
    sortName: 'id',
    sortOrder: 'desc',
    idField: 'id',
    columns: columns,

    toolbar: ToolbarT,
    onLoadSuccess: function (row, data) {
        Option.FormTableBuild('.editForm', data.Field, {
            group: 2,
            name: 'field',
            title: 'remark',
            class: '',

        });
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

