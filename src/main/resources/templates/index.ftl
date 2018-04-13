<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Online Distribution Center</title>
  <!-- Import theme css -->
  <link rel="stylesheet" href="/easyui/themes/gray/easyui.css">
  <!-- icon -->
  <link rel="stylesheet" href="/easyui/themes/icon.css">
  <link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css">
  <!-- project common theme -->
  <link rel="stylesheet" href="/css/app.css">
  <!-- 1st：jquery， -->
  <script src="/easyui/jquery.min.js" charset="utf-8"></script>
  <!-- easyui core -->
  <script src="/easyui/jquery.easyui.min.js" charset="utf-8"></script>
  <!-- Easyui expansion -->
  <script src="/easyui/jquery.edatagrid.js" charset="utf-8"></script>
  <!-- Easyui locale -->
  <script src="/easyui/locale/easyui-lang-zh_CN.js" charset="utf-8"></script>
  <!-- Easyui bug fixes -->
  <script src="/easyui/fixed.js" charset="utf-8"></script>
  <script src="/js/lib/xss.js" charset="utf-8"></script>

  <!--privileges-->
  <script src="/resource" charset="utf-8"></script>

  <!--webSocket support-->
  <script src="/js/lib/sockjs.min.js" charset="utf-8"></script>

  <script src="/js/lib/vue.js" charset="utf-8"></script>

  <script>
    var MEMBER = {
      id:${s_member.id},
      realName: '${s_member.realName}',
      userName: '${s_member.userName}'
    };
  </script>
  <script src="/js/require.js" charset="utf-8" data-main="js/app" defer async="true"></script>
</head>
<body class="easyui-layout">
<div data-options="region:'north'" style="height: 70px;overflow: hidden;padding: 0 10px;">
  <div class="user-info">
    <span class="item" id="public_change_info"><i class="fa fa-user"></i> ${s_member.realName}</span>
    <span class="item" id="public_change_password"><i class="fa fa-user"></i> Change Password</span>
    <a class="item" href="/logout"><i class="fa fa-sign-out"></i> 注销</a>
  </div>
  <h1>Online Distribution Center</h1>
</div>
<div title="Menu" data-options="region:'west',iconCls:'fa fa-list'" style="width: 200px">
  <div class="easyui-accordion" data-options="fit:true,border:false">
  <#list menus as menu>
	  <#if !menu.parent??>
        <div title="${menu.resName}" data-options="iconCls:'fa fa-cogs'">
          <ul class="crm-menu">
			  <#list menus as child>
				  <#if child.parent?? && child.parent.id == menu.id>
                    <li data-url="${child.menuUrl}">${child.resName}</li>
				  </#if>
			  </#list>
          </ul>
        </div>
	  </#if>
  </#list>
  </div>
</div>
<div data-options="region:'center',href:'/desktop'">

</div>
<div id="footer" data-options="region:'south'" style="height:20px;text-align: center;line-height: 20px;overflow: hidden;">
  <div id="online" class="online">
    Number of online user：<span v-text="online"></span>
  </div>
  Copyright © 2018 Online Distribution Center v0.1 Powered by Shijie Li, Li Huang, Fangzheng Li</a>

  <div id="online_list" class="online-list">
    <div class="online-list-header">
      <i class="fa fa-close"></i>
      <span>Online system user</span>
    </div>
    <div class="online-list-users">
      <ul>
        <li v-for="(user,i) in onlineUser" :id="'user'+user.uid" :key="user" :index="i" @click="sendMsg(user,${s_member.id})">
          <span class="online-user-avator">
            <i class="fa fa-user"></i>
          </span>
          <span v-text="user.realName"></span>
        </li>
      </ul>
    </div>
  </div>
</div>
</body>
</html>