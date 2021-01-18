var name = "Heather";
const states = 52;

var x = 5;
var y = 4;
var sum = x + y;

// The Function returns the product of x and y
function myFunction(x, y) {
    return x + y; 
}

// Alert message Hello World!
function sayHello() {
    alert('Hello World!');
}
sayHello();

// Check age limit to allow if content is accessible for user
function checkAge(name, age) {
    if age < 21 {
        alert ("Sorry " + name + ", you aren't old enough to view this page!")
    }
};

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("john", 17);

// Array of Favorite Vegetables
var Veggies = [garlic, green beans, onions, squash, cabbage];
vLen =  Veggies.length;

// Use loop to display my favorite vegetables to console
text = "ul>";
for (i=0; i < vLen; i++) {
    text += "<li>" + Veggies[i] + "</li>";
}
text+= "</ul>";

// create object that will display name and breed to console
var pet = {name: "Blue", breed: "Pitbull"};
console.log(pet);

//create array of 5 objects
var friends = [
    { name: "Antonio", age: 28 },
    { name: "Kendall", age: 15 },
    { name: "Ethan", age: 16 },
    { name: "Kaleb", age: 13 },
    { name: "Roshunda", age: 30 }
];

// perform loop chechAge for objects listed above
for ( var i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
};

// create getlength function to take any word as argument
function getlength(word) {
    return word.length;

};

let wordlength = getlength("HelloWorld!");
if (wordlength % 2 == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
};