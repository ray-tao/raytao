$("p").on("click", function (event) {
    if (event.currentTarget.textContent === "an angel") {
        event.currentTarget.textContent =
            "correct! my birtday is the day after so i'm dressing up as a nov 1 angel :)";
        event.currentTarget.style.color = "#130B05";
    } else {
        event.currentTarget.textContent = "nope! try again";
        event.currentTarget.style.color = "#130B05";
    }
});
