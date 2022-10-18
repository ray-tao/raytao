var playing = false;

$("button").on("click", function () {
    if (playing == false) {
        playing = true;
        $("#record").addClass("on");
        $("#tone-arm").addClass("play");
        $("button").text("◼");
        setTimeout(function () {
            $("#stressedout-song")[0].play();
        }, 1000);
    } else {
        playing = false;
        $("#record").removeClass("on");
        $("#tone-arm").removeClass("play");
        $("button").text("▶︎");
        $("#stressedout-song")[0].pause();
    }
});

$("#slider").on("input", function (event) {
    $("#stressedout-song")[0].volume = Number(event.target.value);
});
