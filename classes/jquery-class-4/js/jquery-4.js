var firstArray = ["hello", 100, true];
console.log(firstArray[0]);
console.log(firstArray[1]);
console.log(firstArray[2]);

var fruits = [];
console.log(fruits[0]);
fruits[0] = "apple"; /*undefined bc nothing in array*/
fruits[1] = "orange";
fruits[2] = "banana";
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); /*undefined bc there is no third array*/

var animals = [];
animals.push("dogs");
animals.push("cats");
animals.push("rabbits");
console.log(animals[0]); /*"dogs"*/
console.log(animals[1]); /*"cats"*/
console.log(animals[2]); /*rabbits*/
console.log(animals[3]); /*undefined*/

var shapes = ["rectangle", "square", "circle", "triangle"];
shapes.pop(); /*deletes last item*/
shapes.shift(); /*deletes first item*/
console.log(shapes);

var furnitures = ["chair", "table", "desk", "closet", "sofa"];
furnitures.splice(2, 1); /* delete 1 item starting from position 2*/
console.log(furnitures);

var transportations = ["train", "bus", "plane", "foot"];
transportations.splice(
    2,
    0,
    "bike"
); /* add "bike" after 2nd array, remove nothing */
console.log(transportations);

/*remove 2 elements after 2nd element,  insert "soup" after the removed element, in other words, replace "hotdog" and "dumplings" with "soup"*/
var food = ["burger", "fries", "hotdog", "dumplings", "curry"];
food.splice(2, 2, "soup");
console.log(food);

$("#btn1").click(function () {
    var textvalue = $("#textinput").val();
    console.log(textvalue);
    $("#target").html(textvalue);
});
$("#btn2").click(function () {
    var textvalue = $("#longtext").val();
    console.log(textvalue);
    $("#target").html(textvalue);
});
