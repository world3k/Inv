var Title = $('.tabs-selected a span').text();
var Module = 'grant';
var PostModule = 'point/' + Module;
var DataGrid = '#' + Module + 'Grid';
var ToolbarT = '#' + Module + 'Toolbar';
var DiaLog = '#' + Module + 'DiaLog';
var Form = '#' + Module + 'Form';
var SearchForm = "#" + Module + 'SearchForm';
var SeatchType = "company";

var columns = [[
    {field: 'ck', checkbox: true},

    {title: '记录id', field: 'order_id', width: '5%', align: 'left', sortable: true},
    {title: '用户名称', field: 'username', width: '10%', align: 'left', sortable: true},
    {title: '部门', field: 'dep_name', width: '15%', align: 'left', sortable: true},
    {title: '组别', field: 'group_name', width: '6%', align: 'left', sortable: true},
    {title: '电话号码', field: 'phone', width: '12%', align: 'left', sortable: true},
    {title: '发放分值', field: 'change', width: '6%', align: 'left', sortable: true},
    {title: '剩余积分', field: 'balance', width: '6%', align: 'left', sortable: true},
    {title: '管理员可使用积分', field: 'balance_point', width: '12%', align: 'left', sortable: true},
    {title: '发放时间', field: 'create_time', width: '12%', align: 'left', sortable: true},
    {
        title: '级别', field: 'level', width: '10%', align: 'center',
        formatter: function (value,row) {
             if(row.level==1)
             {
                 return '<a>用户</a>';
             }
            if(row.level==2){
                return '<a>管理员</a>';
            }
            if(row.level==4){
                return '<a>厂家</a>';
            }
        }
    },
    {
        title: '操作', field: 'id', width: '5%', align: 'center',
        formatter: function (value) {

            //return '<a href="javascript:void(0)" onclick="Option.setStatus(9,' + value + ')">删除</a>'

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
        //Option.FormTableBuild('.editForm', data.Field, {
        //    group: 2,
        //    name: 'field',
        //    title: 'remark',
        //    class: '',
        //
        //});
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

