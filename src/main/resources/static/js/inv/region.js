define(function () {
  return function () {
    var dg = $("#region_dg");
    var searchFrom = $("#region_search_from");
    var form;

    // 
    dg.datagrid({
      url: '/inv/region/list',
      emptyMsg: "No region",
      idField: "id",
      fit: true,
      rownumbers: true,
      fitColumns: true,
      border: false,
      pagination: true,
      singleSelect: true,
      ignore: ['roles'],
      pageSize: 30,
      columns: [[{
        field: 'name',
        title: 'Region',
        width: 30,
        editor: {
          type: 'validatebox',
          options: {
            required: true
          }
        },
        formatter: function (val) {
          return filterXSS(val);
        }
      }, {
        field: 'description',
        title: 'Description',
        width: 30,
        editor: {
          type: 'validatebox',
          options: {
            required: false
          }
        },
        formatter: function (val) {
          return filterXSS(val);
        }
      },  
        {
    	  field: 'test',
          title: 'Do',
          width: 50,
          align: 'center',
          formatter: function (value, row, index) {
            return authToolBar({
              "region-edit": '<a data-id="' + row.id + '" class="ctr ctr-edit">Edit</a>',
              "region-delete": '<a data-id="' + row.id + '" class="ctr ctr-delete">Delete</a>'
            }).join("");
          }
        }
      ]],
      toolbar: authToolBar({
        "region-create": {
          iconCls: 'fa fa-plus-square',
          text: "Create",
          handler: function () {
            createForm()
          }
        }
      })
    });


    /**
     * binding events
     */
    dg.datagrid("getPanel").on('click', "a.ctr-edit", function () {// Edit event
      createForm.call(this, this.dataset.id)
    }).on('click', "a.ctr-delete", function () {// delete event
      var id = this.dataset.id;
      $.messager.confirm("Delete Alert", "Are you sure to delete this region?", function (r) {
        if (r) {
          $.get("/inv/region/delete", {id: id}, function () {
            // After the operation, refresh the data
            dg.datagrid("reload");
          });
        }
      });
    });

    /**
     * search event
     */
    searchFrom.on('click', 'a.searcher', function () {//search
      dg.datagrid('load', searchFrom.formToJson());
    }).on('click', 'a.reset', function () {//reset
      searchFrom.form('reset');
      dg.datagrid('load', {});
    });


    /**
     * create form window
     *
     * @returns
     */
    function createForm(id) {
      var dialog = $("<div/>", {class: 'noflow'}).dialog({
        title: (id ? "Eodify" : "Create") + "region",
        iconCls: 'fa ' + (id ? "fa-edit" : "fa-plus-square"),
        height: id ? 380 : 420,
        width: 420,
        href: '/inv/region/form',
        queryParams: {
          id: id
        },
        modal: true,
        onClose: function () {
          $(this).dialog("destroy");
        },
        onLoad: function () {
          //Loading Window form successfully
          form = $("#region-form");

          $("#region_name").textbox({
            label: 'Name：',
            required: true,
            validType: ['name', 'length[6, 10]', "remote['/inv/region/check','name']"]
          })
        },
        buttons: [{
          iconCls: 'fa fa-save',
          text: 'Save',
          handler: function () {
            if (form.form('validate')) {
              $.post("/inv/region/save", form.serialize(), function (res) {
                dg.datagrid('reload');
                dialog.dialog('close');
              })
            }
          }
        }]
      });
    }
  }
});