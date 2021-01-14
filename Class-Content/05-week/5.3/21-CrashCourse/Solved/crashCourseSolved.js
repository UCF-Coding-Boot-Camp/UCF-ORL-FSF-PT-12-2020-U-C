// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable
var name = "Ahmed";


// 2. ARRAYS
// ==========================================================

// Create an array of five strings
var fiveArray = ["Ahmed", "Lexus", "Tom", "Jim", "Joy"];


// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"
for (var i = 0; i < 5; i++) {
  console.log("My name is Bob");
}


// Create a for loop that loops through your five string array and prints each name
for (var i = 0; i < fiveArray.length; i++) {
  console.log("My name is " + fiveArray[i]);
}


// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function
var divider = function(num1, num2) {
  var result = num1 / num2;
  console.log(result);
  return result;
};

// Prints 5
divider(10, 2);


// Create a function that takes in an array of strings and then loops through the array and prints out strings.
// Then call that function
var looper = function(arrayNumbers) {
  for (var i = 0; i < arrayNumbers.length; i++) {
    console.log(arrayNumbers[i]);
  }
};

looper(fiveArray);


// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object
var monsterTruck = {
  name: "Digital Destructor",
  brand: "Honda",
  carsDestroyed: 2001
};


// Console log any three of the properties in that object
console.log(monsterTruck.name);
console.log(monsterTruck.brand);
console.log(monsterTruck.carsDestroyed);


// Create an Array of 3 Objects
var threeObjects = [
  {
    name: "Digital Destructor",
    brand: "Honda",
    carsDestroyed: 2001
  },
  {
    name: "Turbulent Combuster",
    brand: "Toyota",
    carsDestroyed: 500
  },
  {
    name: "Sams Man",
    brand: "Sam",
    carsDestroyed: 2
  }
];


// Console log 3 properties for every one of the five objects
for (var i = 0; i < threeObjects; i++) {
  console.log(threeObjects[i].name);
  console.log(threeObjects[i].brand);
  console.log(threeObjects[i].carsDestroyed);
}


// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.
// Do this on a new page or see previous example


// 7. OVERALL STRUCTURE
// ==========================================================

// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.
