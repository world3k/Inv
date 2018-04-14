<form class="app-form" id="region-form">
  <input type="hidden" name="id">
<#if region??>
  <input type="hidden" name="name">
</#if>
  <div class="field">
    <input class="easyui-textbox" name="name" style="width:80%" data-options="label:'Region Name：',required:true">
  </div>
<#if !region??>
  <div class="field">
    <input id="region_name" name="name" style="width:100%">
  </div>
</#if>


  <div class="field">
    <input class="easyui-textbox" name="description" style="width:100%" data-options="label:'Description：',required:false">
  </div>
</form>
<script>
	<#if region??>
    $(function () {
      // Load data after initializing all compoents.
      setTimeout(function () {
        var region = ${region};
        if (region.roles) {
          var roles = [];
          $.each(region.roles, function () {
            roles.push(this.id);
          });
          region.roles = roles.join(",");
        }
        $("#region-form").form("load", region);
      }, 200);
    });
	</#if>
</script>