var Title = $('.tabs-selected a span').text();
var Module = 'seting';
var PostModule = 'point/' + Module;
var DataGrid = '#' + Module + 'Grid';
var ToolbarT = '#' + Module + 'Toolbar';
var DiaLog = '#' + Module + 'DiaLog';
var Form = '#' + Module + 'Form';
var SearchForm = "#" + Module + 'SearchForm';
var SeatchType = "company";

var columns = [[
    {field: 'ck', checkbox: true},

    {title: '用户名', field: 'setingname', width: '12%', align: 'left', sortable: true},
    {title: '姓名', field: 'truename', width: '11%', align: 'center', sortable: true},
    {title: '性别', field: 'sex', width: '5%', align: 'left', sortable: true},
    {title: '部门', field: 'depname', width: '10%', align: 'left', sortable: true},
    {title: '职位', field: 'posname', width: '5%', align: 'left', sortable: true},
    {title: '座机', field: 'tel', width: '5%', align: 'left', sortable: true},
    {title: '手机', field: 'phone', width: '5%', align: 'left', sortable: true},
    {title: '级别', field: 'level', width: '5%', align: 'left', sortable: true},
    {title: '身份证', field: 'idnumber', width: '5%', align: 'left', sortable: true},
    {title: '入职时间', field: 'hiredate', width: '5%', align: 'left', sortable: true},
    {title: '离职时间', field: 'dimission', width: '5%', align: 'left', sortable: true},
    {title: '状态', field: 'status', width: '5%', align: 'left', sortable: true},


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

