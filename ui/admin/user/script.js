var Title = $('.tabs-selected a span').text();//显示标题
var Module = 'user';//设置当前模块
var PostModule = 'admin/' + Module;//提交信息
var DataGrid = '#' + Module + 'Grid';//定义id
var ToolbarT = '#' + Module + 'Toolbar';//定义ID
var DiaLog = '#' + Module + 'DiaLog';//定义ID
var Form = '#' + Module + 'Form';//定义ID
var SearchForm = "#" + Module + 'SearchForm';//定义ID
var SeatchType = "company";//？
Cache.set('GridType', 'datagrid');//前端缓存
Cache.set('ModuleInfo', {Module: Module});//前端缓存
/**********************************/
var deplist = Option.getLists('/admin/dep/lists');//列表展示
var poslist = Option.getLists('/admin/pos/lists');//列表展示
/**********************************/
var columns = [[
    {field: 'ck', checkbox: true},

    {title: '用户名', field: 'username', width: '5%', align: 'left', sortable: true},
    {title: '姓名', field: 'truename', width: '10%', align: 'center', sortable: true},
    {title: '性别', field: 'sex', width: '5%', align: 'left', sortable: true},
    {
        title: '部门', field: 'depid', width: '5%', align: 'left', sortable: true,
        formatter: function (value, rows) {//ID取文字

            if (typeof deplist[rows.depid] != 'undefined') {
                return deplist[rows.depid].text;
            }
        }
    },
    {
        title: '职位', field: 'posid', width: '5%', align: 'left', sortable: true,
        formatter: function (index, rows) {
            if (typeof poslist[index] != 'undefined') {
                return poslist[index].text;
            }
        }
    },
    {title: '座机', field: 'tel', width: '10%', align: 'left', sortable: true},
    {title: '手机', field: 'phone', width: '10%', align: 'left', sortable: true},
    {title: '级别', field: 'level', width: '5%', align: 'left', sortable: true},
    {title: '身份证', field: 'idnumber', width: '10%', align: 'left', sortable: true},
    {title: '入职时间', field: 'hiredate', width: '10%', align: 'left', sortable: true},
    {title: '离职时间', field: 'dimission', width: '10%', align: 'left', sortable: true},
    {
        title: '职位状态', field: 'status', width: '5%', align: 'left', sortable: true,
        formatter: function (value, row) {

            if (row.status === 1) {
                return '<a href="javascript:void(0)" onclick="Option.setStatus(2,' + row.id + ')">在职</a>';
            }

            if (row.status === 2) {
                return '<a href="javascript:void(0)" onclick="Option.setStatus(1,' + row.id + ')">离职</a>';
            }
        }
    },


    {
        title: '操作', field: 'id', width: '10%', align: 'center',
        formatter: function (value) {

            return '<a href="javascript:void(0)" onclick="Option.UpOpen(' + value + ')">编辑</a>' +
                '&nbsp;&nbsp;&nbsp;' +
                '<a href="javascript:void(0)" onclick="Option.setStatus(9,' + value + ')">删除</a>';

        }
    }
]];


$(DataGrid).datagrid({//表格数据的显现
    url: Qrck.baseApiUrl + PostModule + '/index',//数据源
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
    onLoadSuccess: function (data) {
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

