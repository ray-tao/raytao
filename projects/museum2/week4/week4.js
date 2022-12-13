$("#wrapper > div").on("click", function () {
    var clickedDiv = $(this);
    clickedDiv.css("top", "0");
    clickedDiv.find("h3").css("bottom", "-5vw");
    setTimeout(function () {
        clickedDiv.css("top", "-10vw");
        clickedDiv.find("h3").css("bottom", "10vw");
    }, 5000);
});
