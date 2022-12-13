$(document).ready(function () {
    var events = [
        {
            date: "800 BC",
            content: "recognized as a concept in Homer’s Odyssey",
        },
        {
            date: "17th century",
            content: "the term was coined by a Greek botanist",
        },
        {
            date: "18th century",
            content:
                "pink was a symbol of class and luxury from the Georgian gowns to Rococo's sun-dappled dresses",
        },
        {
            date: "(no date)",
            content: "in Christianity, pink symbolizes womb and innocence",
        },
        {
            date: "(no date)",
            content: "for the Roman goddess Venus, intimacy and love",
        },
        {
            date: "present—future",
            content:
                "in many more of art's history does pink come in and go <br>and in many more of art's future will pink come in and go too",
        },
    ];

    $("#my-timeline").roadmap(events, {
        eventsPerSlide: 6,
        slide: 1,
        prevArrow: '<i class="material-icons">keyboard_arrow_left</i>',
        nextArrow: '<i class="material-icons">keyboard_arrow_right</i>',
        onBuild: function () {
            console.log("onBuild event");
        },
    });
});
