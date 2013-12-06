
// this is a line comment

//alert("Hello, world1.");

var helloFrom = function(personName) {
    return "Hello from " + personName;
}

var people = ['Tom', 'Yoda', 'Ron'];

people.push('Bob');
people.push('Dr Evil');

people.pop();

for (var i=0; i<people.length; i++) {
    var greeting = helloFrom(people[i]);
    alert(greeting);
}


/* testing objects
var jedi = {
    name: "Yoda",
    age: 899,
    talk: function () { alert("another... Sky... walk..."); }
};
*/


/* create a function
var add = function (a, b) {
    return a+b;
};

var result=add(1, 2); //result is now 3

alert(result);
*/

/*/ testing While
var i=1;
while (i<5){
    alert(i);
    i=i+1;
}
//i is now 5


// testing For
for (var i=1; i<5; i++) {
    alert(i);
}
*/

/*** if else ***********************************
/***********************************************
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
*/

