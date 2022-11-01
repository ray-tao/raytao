var addinghello;
$("#prepend-btn").click(function () {
    console.log("click");
    $("body").prepend('<div class="newbox"></div>');
});

$("#append-btn").click(function () {
    $("body").append('<div class="newbox"></div>');
});

addinghello = setInterval(function () {
    $("body").prepend("hello");
}, 500);

$("#stop").click(function () {
    clearInterval(addinghello);
});

$("#colorchange").click(function () {
    setTimeout(function () {
        $("body").css({ "background-color": "red" });
    }, 5000);
});
