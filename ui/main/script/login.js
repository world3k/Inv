/**
 *
 */
$(function () {
    if (Qrck.isLogin()) {
        window.location.href = Qrck.baseHtmlUrl + Qrck.baseHtmlMain;
    }
    document.onkeydown = function (e) {
        e = e || event;
        if (e.keyCode == 13) {
            loginFun();
        }
    };
    // 构建登录窗口
    $('#LoginBox').dialog({
        title: '华安堂科技有限公司',
        width: 400,
        height: 200,
        iconCls: 'icon-man',
        closable: false,
        draggable: false,
        cache: false,
        modal: false,
        shadow: false,
        buttons: [{
            text: '登录',
            iconCls: 'icon-man',
            id: 'aa',
            handler: function () {
                loginFun()
            }
        }],
        onOpen: function () {
            $('#username').focus();
        }
    });

    //	登录账户验
    $('#username').validatebox({
        required: true,
        missingMessage: '请输入登录账号'
    });
    //	登录密码验证
    $('#password').validatebox({
        required: true,
        validType: 'length[3,20]',
        missingMessage: '请输入登录密码',
        invalidMessage: '密码长度不应低于3位或大于20位'
    });

});
//Login 登录

var loginFun = function () {
    if ($('#loginform').form('validate')) {

        Qrck.post(Qrck.baseApiLoginUrl, $('#loginform').serialize(), function () {
            $.messager.progress({
                text: '登录验证中请稍后……',

            });
        }, function (result) {
            if (result.code == 200) {
                var login_name = $('#username').val();
                $.cookie('login_name', login_name, {path: Qrck.cookiePath});
                $.cookie('token', result.data.token, {path: Qrck.cookiePath});
                window.location.href = Qrck.baseHtmlUrl + Qrck.baseHtmlMain;
            }
            if (result.code == 400) {
                $('#loginform').find('input').val('');
                $.messager.progress('close');
                $.messager.show({
                    title: '提示',
                    msg: '用户不存在或密码错误，请重新登录',
                    showType: 'slide',
                });
            }

        }, function (data) {
            $('#loginform').find('input').val('');
            $.messager.progress('close');
            $.messager.show({
                title: '提示',
                msg: '用户不存在或密码错误，请重新登录',
                showType: 'slide',
            });
        });
    }
};
