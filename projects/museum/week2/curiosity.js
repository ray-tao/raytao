$("body").on("mousemove", function (event) {
    var x = $(".eye").offset().left + $(".eye").width() / 2;
    var y = $(".eye").offset().top + $(".eye").height() / 2;
    var radians = Math.atan2(event.clientX - x, event.clientY - y);
    var rotate = radians * (180 / Math.PI) * -1 + 180;
    $(".eye").css({
        transform: "rotate(" + rotate + "deg)",
    });
});
