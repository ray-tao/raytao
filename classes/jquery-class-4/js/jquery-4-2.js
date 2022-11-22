var luckyAnimals = [
    "dog",
    "cat",
    "rabbit",
    "sparrow",
    "squirrel",
    "zebra",
    "giraffe",
];

$("#submit").click(function () {
    var selected = $("#zodiac").val();
    console.log(selected);
    var luckyColor;
    if (selected == "Aries") {
        luckyColor = "red";
    } else if (selected == "Taurus") {
        luckyColor = "orange";
    } else if (selected == "Gemini") {
        luckyColor = "yellow";
    } else if (selected == "Cancer") {
        luckyColor = "green";
    } else if (selected == "Leo") {
        luckyColor = "babyblue";
    } else if (selected == "Virgo") {
        luckyColor = "blue";
    } else if (selected == "Libra") {
        luckyColor = "purple";
    } else if (selected == "Scorpio") {
        luckyColor = "pink";
    } else if (selected == "Sagittarius") {
        luckyColor = "brown";
    } else if (selected == "Capricorn") {
        luckyColor = "aqua";
    } else if (selected == "Aquarius") {
        luckyColor = "crimson";
    } else if (selected == "Pisces") {
        luckyColor = "forestgreen";
    }
    var luckyAnimal = luckyAnimals[Math.ceil(Math.random() * 7 - 1)];

    $("#result").html(
        "Your lucky color is " +
            luckyColor +
            ", your lucky animal is " +
            luckyAnimal +
            "!"
    );

    $("#result").css({ color: luckyColor });
});
