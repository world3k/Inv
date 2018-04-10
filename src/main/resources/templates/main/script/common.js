$(function () {
    $('.easyui-switchbutton').switchbutton({
        width: 80,
        onChange: function (value) {
            dump({values: value, value: '22222'});
        }
    });
});