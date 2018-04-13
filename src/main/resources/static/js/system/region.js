define(function () {
  return function () {
    var dg = $("#region_dg");
    var currentRoelId;

    // 使用edatagrid，需要而外导入edatagrid扩展
    dg.edatagrid({
      url: '/inv/region/list',
      saveUrl: '/inv/region/save',
      updateUrl: '/inv/region/update',
      destroyUrl: '/inv/region/delete',
      emptyMsg: "还未创建region",
      idField: "id",
      fit: true,
      rownumbers: true,
      ignore: ['resource'],
      fitColumns: true,
      border: false,
      columns: [[{
        field: 'regionName',
        title: 'region名称',
        width: 50,
        editor: {
          type: 'validatebox',
          options: {
            required: true
          }
        }
      }, {
        field: 'description',
        title: '描述',
        width: 100,
        editor: {
          type: 'textbox',
          options: {
            multiline: true,
            height: 50
          }
        }
      }]],
      toolbar: authToolBar({
        "region-create": {
          iconCls: 'fa fa-plus-square',
          text: "创建",
          handler: function () {
            dg.edatagrid('addRow');
          }
        },
        "region-save": {
          iconCls: 'fa fa-save',
          text: "保存",
          handler: function () {
            dg.edatagrid('saveRow');
          }
        },
        "region-delete": {
          iconCls: 'fa fa-trash',
          text: "删除",
          handler: function () {
            dg.edatagrid('destroyRow');
          }
        }
      }, {
        iconCls: 'fa fa-mail-reply',
        text: "取消",
        handler: function () {
          dg.edatagrid('cancelRow');
        }
      }, {
        iconCls: 'fa fa-refresh',
        text: "刷新",
        handler: function () {
          dg.edatagrid('reload');
        }
      }),
      onError: function (index, data) {
        // 操作请求发送错误
        console.error(data);
      }      
    });

  }
});