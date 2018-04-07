Option = {

    AddOpen: function () {
        $(Form).removeAttr('hidden');
        NowType = 'add';
        $(Form).form('clear');
        var T = Title + '--添加';
        /*获取数据*/


        $(DiaLog).dialog(
            {
                href: '../' + Module + '/dialog.html',//加载弹窗
                title: T,
                inline: true,
                width: 800,
                height: 500,
                closed: false,
                cache: false,
                modal: true,
                buttons: [{
                    text: '保存',
                    iconCls: 'icon-save',
                    handler: function () {
                        //var data = $(select).serializeArray();
                        Qrck.post(PostModule + '/create', $(Form).serializeArray(),
                            function () {
                                $.messager.progress({
                                    text: '请稍后……'
                                });
                            }, function (data) {
                               if(data.code==200){
                                   $.messager.progress('close');
                                   $.messager.alert({
                                       title: '提示',
                                       msg: '添加成功!',
                                       icon: 'warning',
                                       fn: function () {
                                           Option.clear();
                                       }
                                   });
                                   $(DataGrid).datagrid('load');
                               }
                                else {
                                   $.messager.progress('close');
                                   $.messager.alert({
                                       title: '提示',
                                       msg: '添加失败!',
                                       icon: 'warning',
                                       fn: function () {
                                           Option.clear();
                                       }
                                   });
                                   $(DataGrid).datagrid('load');
                               }

                            }, function () {
                                $.messager.progress('close');
                                $.messager.alert({
                                    title: '错误提示',
                                    msg: '添加失败!查找一下哪里有问题....'
                                });
                            });
                    }
                }, {
                    text: '取消',
                    iconCls: 'icon-cancel',
                    handler: function () {
                        Option.clear();
                        Option.Reload();
                    }
                }]

            }
        );
    },
    UpOpen: function (value) {

        $(Form).removeAttr('hidden');
        var U = Title + '--修改';
        //获取编辑数据
        var ids = Option.Is_Select(value);

        if (ids == null) {
            $.messager.alert({
                title: '提示',
                msg: '请选择一行进行编辑!'
            });
        } else {
            $.ajax({
                type: 'get',
                url: Qrck.baseApiUrl + PostModule + '/view?id=' + ids,
                success: function (data) {
                    $(Form).form('load', data);
                }
            });
            $(DiaLog).dialog({
                href: '../' + Module + '/dialog.html',
                title: U,
                inline: true,
                width: 1200,
                height: 300,
                closed: false,
                cache: false,
                modal: true,
                buttons: [{
                    text: '提交',
                    iconCls: 'icon-save',
                    handler: function () {
                        Qrck.post(PostModule + '/update?id=' + ids, $(Form).serializeArray(),
                            function () {
                                $.messager.progress({
                                    text: '请稍后……'
                                });
                            }, function () {
                                $.messager.progress('close');
                                $.messager.alert(
                                    '提示',
                                    '提交成功!',
                                    'warning'
                                );
                                Option.clear();
                                Option.Reload();
                            }, function () {
                                Option.clear();
                                $.messager.progress('close');
                                $.messager.alert('提交', '提交失败!查找一下哪里有问题....');
                            });

                    }
                }, {
                    text: '取消',
                    iconCls: 'icon-cancel',
                    handler: function () {
                        Option.clear();
                        Option.Reload();
                    }
                }]
            });

        }
    },
    Rule: function (index) {

        var ids = Option.Is_Select(index);
        var value = 1;
        $(Form).removeAttr('hidden');
        var U = Title + '--修改';
        //获取编辑数据


        if (ids == null) {
            $.messager.alert({
                title: '提示',
                msg: '请选择一行进行编辑!'
            });
        } else if (ids == null) {
            $.messager.alert({
                title: '提示',
                msg: '请选择一行进行编辑!'
            });
        } else {
            $(DiaLog).after('<div></div>');
            $(DiaLog + '').dialog({
                href: '../rule/rule.html',
                title: U,
                inline: true,
                maximizable: true,
                width: 1000,
                height: 400,
                closed: false,
                cache: false,
                modal: true,
                buttons: [{
                    text: '提交',
                    iconCls: 'icon-save',
                    handler: function () {
                        var ModuleInfo = Cache.get('ModuleInfo');
                        Qrck.post('admin/' + ModuleInfo.Module + '/ruleupdate?id=' + ids, $('.ruleForm').serializeArray(),
                            function () {
                                $.messager.progress({
                                    text: '请稍后……'
                                });
                            }, function () {
                                $.messager.progress('close');
                                $.messager.alert(
                                    '提示',
                                    '提交成功!',
                                    'warning'
                                );
                                Option.clear();
                                Option.Reload();
                            }, function () {
                                $(DiaLog).dialog('close');
                                $.messager.progress('close');
                                $.messager.alert('提交', '提交失败!查找一下哪里有问题....');
                            });

                    }
                }, {
                    text: '取消',
                    iconCls: 'icon-cancel',
                    handler: function () {
                        $(DiaLog).dialog('close');
                        Option.clear();
                        Option.Reload();
                    }
                }]
            });

        }
    },
    clear: function () {
        $(DiaLog).dialog('close');


        if (Cache.get('GridType') === 'datagrid') {
            $(DataGrid).datagrid('clearSelections');
            $(DataGrid).datagrid('clearChecked');
        }
        if (Cache.get('GridType') === 'treegrid') {
            $(DataGrid).treegrid('clearSelections');
            $(DataGrid).treegrid('clearChecked');
        }
    },
    Reload: function () {
        if (Cache.get('GridType') === 'datagrid') {
            $(DataGrid).datagrid('load');
        }
        if (Cache.get('GridType') === 'treegrid') {
            $(DataGrid).treegrid('load');
        }
    },
    FormTableBuild: function (params) {

        var html = '';
        Qrck.get(params.url, {}, '', function (data) {

            var group = params.group;
            var array = [];
            var ignoreField = $.extend([], params.ignoreField);
            $.each(data, function (index, v) {

                if (v.remark != '') {
                    if (!in_array(ignoreField, v.field)) {
                        array.push("<th><label>" + v.remark + ":</label></th><td><input class='" + v.class + "' data-options='" + v.options + "' name='" + v.field + "'></td>");
                    }
                }
            });
            var htmls = [];
            var len = array.length;
            for (var i = 0; i < len; i += group) {
                htmls.push(array.slice(i, i + group))
            }

            $.each(htmls, function (index, item) {
                html += '<tr>';
                $.each(item, function (ii, v) {
                    html += v
                });
                html += '<tr>';
            });
            html += '</tr>';
        });
        $(params.select).append(html);
    },
    getComboBox: function (select, url, onSelect, success) {
        $(select).combobox({
            url: url,
            prompt: '请选择....',
            valueField: 'id',
            textField: 'text',
            editable: false,
            width: 200,
            panelHeight: 75,
            onSelect: onSelect,
            onLoadSuccess: success

        });

    },
    getComboTree: function (select, url, onSelect, success) {
        return $(select).combotree({
            url: url,
            prompt: '请选择....',
            valueField: 'id',
            // textField: 'text',
            idField: 'id',
            // treeField: 'catename',
            required: true,
            editable: false,
            width: 200,
            // panelHeight: 75,
            onSelect: onSelect,
            onLoadSuccess: success
        });
    },
    getTextBox: function (select) {
        $(select).textbox({
            prompt: '请输入',
            // required: true,
            editable: true,
            width: 200,

        });
    },
    getLists: function (url) {
        var deplist = null;
        Qrck.get(url, {}, '', function (data) {
            deplist = data;

        });
        return deplist;
    },
    setStatus: function (sid, value) { //,event
        msg = (sid == 1) ? '当前改动' : '';
        msg += (sid == 2) ? '当前改动' : '';
        msg += (sid == 3) ? '通过' : '';
        msg += (sid == 4) ? '驳回' : '';
        msg += (sid == 9) ? '删除' : '';
        var is;
        is = Option.Is_Select(value);

        if (is == undefined) {
            $.messager.alert('提示', '请勾选一行提交!', 'warning');
        } else if (is.status > 2) {
            $.messager.alert('提示', '此行状态不可更改!', 'warning');
        } else if (is) {
            $.messager.confirm('确认对话框', '您确定想要执行' + msg + '提交吗？', function (r) {
                if (r) {
                    Qrck.delete(PostModule + '/status', {ids: is, status: sid}, function () {
                    }, function (data) {
                        if (data.code== 200) {
                            $.messager.alert('提示', msg + '提交成功!', 'warning', function () {
                                Option.Reload();


                            });
                        }
                        else{
                            if(data.code ==400){
                                $.messager.alert('提示', msg + '错误操作!', 'warning', function () {
                                });
                            }
                            else {
                                $.messager.alert('警告', msg + '提交失败!');
                            }
                        }
                    }, function () {
                        $.messager.alert('警告', msg + '提交失败!');
                    });
                } else {
                    Option.clear();
                }
            });
        } else {
            $.messager.alert('警告', '必须选择一行才能提交!');
        }
    }
    ,
    listOption: function (value) {
        var row = Option.Is_Select('row', value);
        if (row.status <= 2) {
            return '<a href="javascript:void(0)" onclick="Option.UpOpen(' + value + ')">编辑</a>' +
                '&nbsp;&nbsp;&nbsp;' +
                '<a href="javascript:void(0)" onclick="Option.setStatus(9,' + value + ')">删除</a>';
        } else {
            return '<a href="javascript:void(0)" onclick="Option.UpOpen(' + value + ')">查看</a>';
        }


    }
    ,
    Is_Select: function (index) {

        Cache.set(Module + 'GridIndex', index);

        if (typeof index !== 'undefined') {
            return index;
        }

        var id = Cache.get(Module + 'GridIndex');
        var getids = $(DataGrid).datagrid('getChecked');

        if (getids instanceof Array) {
            $.each(getids, function (k, v) {
                id += "," + v.id;
            });

        }

        Cache.set(Module + 'GridIndex', id);


        return Cache.get(Module + 'GridIndex');
    }
    ,
    getSelectStatus: function (select,screen) {
        //工具栏筛选  //状态 1：待发布 2：已发布 3：交易中 4：交易完成  9：删除
        var data = [
            {
                "id": 1,
                "text": screen[0]
            },
            {
                "id": 2,
                "text": screen[1]
            },

        ];
        var panelHeight = data.length * 25;
        $(select).combobox({
            data: data,
            prompt: '请选择....',
            valueField: 'id',
            textField: 'text',
            editable: false,
            width: 200,
            panelHeight: panelHeight,
            onChange: function () {
                Option.SearchForm();
            }
        });
    }
    ,
    TextSearch: function (select) {
        //搜索
        $(select).searchbox({
            prompt: '关键搜索...',
            width: 200,
            panelHeight: 55,
            searcher: function () {
                Option.SearchForm();
            }
        });
    }
    ,
    SearchForm: function () {
        //文章分类树选择结果
        var form = $(SearchForm).serializeArray();
        var each = [];
        form.push({name: 'keytype', value: SeatchType});
        $.each(form, function (k, v) {
            each[v.name] = v.value;
        });
        $(DataGrid).datagrid('load', each)
    },


}
;
