$("p").css({ color: "burlywood" });
$(".trigger").on("click", function () {
    $("h1").css({ color: "brown" });
});

$("p").on("click", function () {
    $(this).css({ color: "brown" });
});

$("p").on("mouseover", function () {
    $(this).css({ color: "#c7965a" });
});

// console.log("test");
// $("#box1").on("click", function () {
//     console.log("box1 clicked");
//     $(this).addClass("blackbox");
// });

$("#box1").on("click", function () {
    if ($(this).hasClass("greenbox")) {
        $(this).removeClass("greenbox");
    } else {
        $(this).addClass("greenbox");
    }
});
$("#box2").on("click", function () {
    $(this).toggleClass("greenbox");
});
