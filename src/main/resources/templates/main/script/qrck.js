var Qrck = {
    baseApiUrl: "http://hat.dev.cn/",
    baseApiLoginUrl: "admin/login/token",
    baseHtmlUrl: "http://hat.dev.cn/ui",
    baseHtmlMain: "/main/pages/main.html",
    menu: {
        '/admin/user/index': ''
    },
    cookiePath: "/",
    asyncFlag: false,
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

        var dataurl = this.baseApiUrl + url;
        $.ajax({
            headers: {
                "X-Auth-Token": $.cookie('token')
            },
            type: method,
            url: dataurl,
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
    isLogin: function () {
        var login_name = $.cookie('login_name');
        var token = $.cookie('token');
        if (!login_name || typeof login_name == "undefined" || login_name == "" || !token || typeof token == "undefined" || token == "") {
            return false;
        } else {
            return true;
        }
    }
};

function dump(data) {
    console.log(data);
}

