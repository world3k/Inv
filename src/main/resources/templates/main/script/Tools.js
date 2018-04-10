var Cache = {
    get: function (key) {
        return JSON.parse(sessionStorage.getItem(key));
    },
    set: function (key, value) {
        return sessionStorage.setItem(key, JSON.stringify(value))
    },
    del: function (key) {
        return sessionStorage.removeItem(key);
    }
};

var FromTools = {

    //判断Grid是否为树形结构
    isGridTree: false,
    /**
     * 关键字搜索
     * @param select
     * @constructor
     */
    TextSearch: function (select) {
        //搜索
        $(select).searchbox({
            prompt: '关键字搜索...',
            width: 150,
            panelHeight: 55,
            searcher: function () {
                FromTools.SearchForm();
            }
        });
    },
    /**
     * 下拉列表
     * @param select
     * @param data
     */
    getComboBox: function (select, data, isTree) {
        var Params = {
            data: data,
            prompt: '请选择....',
            valueField: 'id',
            textField: 'text',
            editable: false,
            width: 200,
            panelHeight: 'auto',
            onChange: function () {
                FromTools.SearchForm();
            },
        };
        if (isTree) {
            $(select).combotree(Params);
        } else {
            $(select).combobox(Params);
        }
    },
    /**
     * 表单提交
     * @constructor
     */
    SearchForm: function () {
        //文章分类树选择结果
        var form = $(SearchForm).serializeArray();
        var each = [];
        form.push({name: 'keytype', value: SeatchType});
        $.each(form, function (k, v) {
            each[v.name] = v.value;
        });

        if (this.isGridTree) {
            $(DataGrid).treegrid('load', each)
        } else {
            $(DataGrid).datagrid('load', each)
        }
    },
    /**
     * 日期选择查询
     * @param select
     */
    datebox: function (select) {

        $(select).datebox({
            required: true
        });
    },
    /**
     * 日期范围查询
     * @param start
     * @param end
     * @constructor
     */
    DateHorizon: function (start, end) {
        $(start).datebox({
            required: true,
            onChange: function (date) {
                FromTools.SearchForm();
            }
        });
        $(end).datebox({
            required: true,
            onChange: function (date) {
                FromTools.SearchForm();
            }
        });
    }
};


var Http = {
    asyncFlag: true,
    dataType: 'json',
    get: function (url, parm, beforeSend, success, error) {
        this.GetAjaxData(url, "get", parm, beforeSend, success, error);
    },
    post: function (url, parm, beforeSend, success, error) {
        this.GetAjaxData(url, "post", parm, beforeSend, success, error);
    },
    put: function (url, parm, beforeSend, success, error) {
        this.GetAjaxData(url, "put", parm, beforeSend, success, error);
    },
    delete: function (url, parm, beforeSend, success, error) {
        this.GetAjaxData(url, "delete", parm, beforeSend, success, error);
    },
    GetAjaxData: function (url, method, parm, beforeSend, success, error) {
        $.ajax({
            headers: {
                "X-Auth-Token": Cache.get('token')
            },
            type: method,
            url: Qrck.baseApiUrl + url,
            cache: false,
            async: this.asyncFlag,
            dataType: this.dataType,
            data: parm,
            beforeSend: function () {
                if (typeof beforeSend === "function") {
                    beforeSend();
                }
            },
            success: function (result) {
                if (typeof success === "function") {
                    success(result);
                }
            },
            error: function (result) {
                if (typeof error === "function") {
                    error(result);
                }
            },
        });
    },
};
var API = {
    dep: "point/config/dep",
    level: "point/config/level",
    shopGroup: "point/config/shopGroup",
};




if (!Cache.get('dep')) {
    Http.asyncFlag = false;
    Http.get(API.dep, {}, {}, function (result) {

        Cache.set('dep', result)
    });
}

//分组
if (!Cache.get('shopGroup')) {
    Http.asyncFlag = false;
    Http.get(API.shopGroup, {}, {}, function (result) {

        Cache.set('shopGroup', result)
    });
}
////级别
if (!Cache.get('level')) {

    Http.asyncFlag = false;
    Http.get(API.level, {}, {}, function (result) {

        Cache.set('level', result)
    });
}
