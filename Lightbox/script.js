

//onclick = "document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'"

(function () {
    $('#start').click(function (e) {
        e.preventDefault();
        $('#light').css('display', 'block'); //css({display: 'block, color: 'red''});
        $('#fade').css('display', 'block');
    });

    $('#close').click(function (e) {
        e.preventDefault();
        $('#light').css({}).addClass('animate');
    });

    $("#light").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
        $('#fade, #light').css({ 'display': 'none', }).removeClass('animate');
        //$('#light').css({}).addClass('flashout');
    });

    //$("#light").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function (e) { //$(this).off(e);  //$(this).one(e); })
})($)