
// this is a line comment

//alert("Hello, world1.");


var apples = prompt('enter number of apples:');
var pears = prompt('enter number of pears:');


var piecesOfFruit = apples+pears;
var piecesForEachPerson = piecesOfFruit/3;

if (apples>pears) {
    //more apples than pears
    alert("more apples than pears")
} else {
    //equal or less apples than pears
    alert("equal or less apples than pears")
}


if (piecesForEachPerson<10) {
    alert("not enough fruit!")
}


