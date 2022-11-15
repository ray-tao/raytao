var playing = false;

$("button").on("click", function () {
    if (playing == false) {
        $("#record").addClass("on");
        $("#tone-arm").addClass("play");
        $("button").text("◼");
        setTimeout(function () {
            $("#stressedout-song")[0].play();
        }, 1000);
        playing = true;
    } else {
        $("#record").removeClass("on");
        $("#tone-arm").removeClass("play");
        $("button").text("▶︎");
        $("#stressedout-song")[0].pause();
        playing = false;
    }
});

$("#slider").on("input", function (info) {
    $("#stressedout-song")[0].volume = Number(info.target.value);
});
