//produce edatagrid and request data for region.
define(function () {
  return function () {
    var dg = $("#region_dg");
    var currentRoelId;

    // produce edatagrid.
    dg.edatagrid({
      url: '/inv/region/list',
      saveUrl: '/inv/region/save',
      updateUrl: '/inv/region/update',
      destroyUrl: '/inv/region/delete',
      emptyMsg: "no region",
      idField: "id",
      fit: true,
      rownumbers: true,
      ignore: ['resource'],
      fitColumns: true,
      border: false,
      columns: [[{
        field: 'name',
        title: 'Region Name',
        width: 50,
        editor: {
          type: 'validatebox',
          options: {
            required: true
          }
        }
      }, {
        field: 'description',
        title: 'Description',
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
          text: "Create",
          handler: function () {
            dg.edatagrid('addRow');
          }
        },
        "region-save": {
          iconCls: 'fa fa-save',
          text: "Save",
          handler: function () {
            dg.edatagrid('saveRow');
          }
        },
        "region-delete": {
          iconCls: 'fa fa-trash',
          text: "Delete",
          handler: function () {
            dg.edatagrid('destroyRow');
          }
        }
      }, {
        iconCls: 'fa fa-mail-reply',
        text: "Cancel",
        handler: function () {
          dg.edatagrid('cancelRow');
        }
      }, {
        iconCls: 'fa fa-refresh',
        text: "Refresh",
        handler: function () {
          dg.edatagrid('reload');
        }
      }),
      onError: function (index, data) {
        // it encouters errors to send the request.
        console.error(data);
      }      
    });

  }
});