var Title = $('.tabs-selected a span').text();
var Module = 'apply';
var PostModule = 'point/' + Module;
var DataGrid = '#' + Module + 'Grid';
var ToolbarT = '#' + Module + 'Toolbar';
var DiaLog = '#' + Module + 'DiaLog';
var Form = '#' + Module + 'Form';
var SearchForm = "#" + Module + 'SearchForm';
var SeatchType = "company";
Cache.set('GridType','datagrid');
var columns = [[
    {field: 'ck', checkbox: true},

    {title: '记录id', field: 'order_id', width: '6%', align: 'left', sortable: true},
    {title: '用户名称', field: 'username', width: '10%', align: 'left', sortable: true},
    {title: '部门', field: 'dep_name', width: '12%', align: 'left', sortable: true},
    {title: '组别', field: 'group_name', width: '6%', align: 'left', sortable: true},
    {title: '电话号码', field: 'phone', width: '12%', align: 'left', sortable: true},
    {title: '申请分值', field: 'dist_point', width: '6%', align: 'left', sortable: true},
    {title: '剩余积分', field: 'balance', width: '6%', align: 'left', sortable: true},
    {title: '申请时间', field: 'create_time', width: '12%', align: 'left', sortable: true},
    {
        title: '当前状态', field: 'status', width: '10%', align: 'center',
        formatter: function (value,row) {
            if(row.status === 0){
                return '<a">未处理</a>';
            }
            if (row.status === 1) {
                return '<a">已通过</a>';
            }

            if (row.status === 2) {
                return '<a">已驳回</a>';
            }

        }
    },
    {
        title: '操作', field: 'id', width: '20%', align: 'center',
        formatter: function (value,row) {
                return '<a href="javascript:void(0)" onclick="Option.setStatus(3,' + row.order_id + ')">通过</a>' +
                    '&nbsp;&nbsp;&nbsp;' +
                    '<a href="javascript:void(0)" onclick="Option.setStatus(4,' + row.order_id + ')">驳回</a>'


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
        // Option.FormTableBuild('.editForm', data.Field, {
        //     group: 2,
        //     name: 'field',
        //     title: 'remark',
        //     class: '',
        //
        // });
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
    width: 300,

});
$('.easyui-datebox').datebox({
    width: 200
});


