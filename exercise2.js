//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for (let i = 0; i < 10; i++) {
    console.log(" the value of i in the loop is : " + i);
}

//your code...

let i = 0; //initializing the i variable outside of the loop.
while (i < 10) { //while i is less than 10.
    console.log(" the value of i in the loop is : " + i); //output the value of i to the console.
    i++; //increment i by 1 for each loop
}


/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...

//((30+2)*20)/10^2

let result = 0 //initializing variables to be used in functions
let resultTwo = 0
let resultThree = 0
let resultFour = 0

function operationOne() { //Create parenthetical function 1, addition
    result = 30 + 2; //add 30 and 2 together to get the sum
    //  console.log('The result of the first operation is ' + result); //print result to console log for testing purposes
}

function operationTwo() { //Create parenthetical function 2, multiplication
    resultTwo = result * 20; //multiply the result of the first function by 20
    //  console.log('The result of the second operation is ' + resultTwo); //print result to console log for testing purposes
}

function operationThree() { //Create squared function
    resultThree = 10 ** 2 //Get the result of 10 to the power of ^2
        //  console.log('The result of the third operation is ' + resultThree); //print result to console log for testing purposes
}

function operationFour() { //Create division function
    resultFour = resultTwo / resultThree; //Divide the result of the second function with the result of the third function
    console.log('The result of the final operation is ' + resultFour); //print result of final operation to console log
}

operationOne(); //call all operation functions
operationTwo();
operationThree();
operationFour();


/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""

function truthyCheck() { //creating loop to console.log all answers and explanations.
    for (let i = 0; i < 12; i++) { //starting at 0, iterate by one per loop and print the truthy check
        if (i === 0) {
            console.log(`20 is ${!!20 == true}. All positive, nonzero numbers are truthy.`);
        } else if (i === 1) {
            console.log(`0 is ${!!0 == true}. The number zero is always falsy.`);
        } else if (i === 2) {
            console.log(`"zero"; is ${!!"zero" == true}. Strings that are not empty/undefined are truthy.`);
        } else if (i === 3) {
            const zero = 20;
            console.log(`const zero = 20; is ${!!zero}. All pre-defined variables are truthy.`);
        } else if (i === 4) {
            console.log(`null is ${!!null == true}. The null value is always falsy.`);
        } else if (i === 5) {
            console.log(`"0" is ${!!"0" == true}. Strings that are not empty/undefined are truthy.`);
        } else if (i === 6) {
            console.log(`!"" is ${!!!"" == true}. Since this string is technically NOT empty, it is truthy.`);
        } else if (i === 7) {
            console.log(`{} is ${!!{} == true}. Empty objects are still truthy.`);
        } else if (i === 8) {
            console.log(`() => {console.log("hello TEKcamp!"); is ${!!(() => {console.log("hello TEKcamp!");})}. Functions are always truthy.`);
        } else if (i === 9) {
            console.log(`125 is ${!!20 == true}. All positive, nonzero numbers are truthy.`);
        } else if (i === 10) {
            console.log(`undefined is ${!!undefined == true}. The undefined value is always falsy.`);
        } else if (i === 11) {
            console.log(`"" is ${!!"" == true}. Empty strings are falsy.`);
        }
    }
}
truthyCheck();


/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

if (day === "monday") {
    console.log("we got a long week ahead of us...");
} else if (day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}

//MY SWITCH REFACTOR

const day = "friday";

switch (day) { //starting the switch method with the "day" constant pulled in
    case "monday": //writing cases for all weekdays
        console.log("we got a long week ahead of us..."); //output message if case matches day
        break; //break to continue checking other cases
    case "tuesday":
        console.log("tuesday's are still better than mondays, but LONG way to go still");
        break;
    case "wednesday":
        console.log("We are smack dab in the middle of the week");
        break;
    case "thursday":
        console.log("Thursday night... the mood is right");
        break;
    case "friday":
        console.log("TGIF. Friday truly is the best day of the week!");
        break;
    default: //weekend days can be the default setting
        console.log("It's a weekend!");
}


/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
if (age > 21) console.log("adult");
else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen');
else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired");
else {
    console.log("still working...");
}

//MY TERNARY REFACTOR

const age = 10

let adultVsMinor = (age < 21) ? console.log("minor") : console.log("adult"); //ternary function 1 to test if adult or minor.

let teen = (age > 13 && age < 19) ? console.log("teen") : console.log("Not a teenager"); //ternary function 2 to test if teen or not.

let retired = (age > 65) ? console.log("retired") : console.log("still working..."); //ternary function 3 to test if retired or not.


/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...

let myself = { //create object literal
    name: "Matthew Choat",
    age: 32,
    gender: "male",
    hobbies: ["longboarding", "yoga", "video games", "guitar"],
    profession: "Software Developer",
    education: [" Bachelors: English > UNT ", " Masters: Technical Writing > UNT ", " Certificate: Coding and Web Development > SMU"],

    learn: function() { // create object method for name
        console.log(this.name) // output name to console
    },
    credentials: function() { // create object method for credentials
        console.log(this.profession + ' ' + this.education) // output profession and education to console
    },
};
myself.learn() //got to call these functions for them to work
myself.credentials()

/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...

let longboard = { //create object literal
    make: "Globe",
    deckColor: "Lime Green",
    trucksColor: "black",
    wheelsColor: "tan",
    deckImage: "C#########D",
    trucksImage: " ^^     ^^ ",
    wheelsImage: " oo     oo ",
    distanceMiles: 3,
    timeHours: .09,
    tilt: ["flat", "sloped down", "sloped up"],

    specs: function() { //create object method for concatenating specs
        console.log('This ' + this.make + ' Longboard has a ' + this.deckColor + ' deck, with ' + this.trucksColor + ' trucks and ' + this.wheelsColor + ' wheels.') // output specs to console
    },
    velocity: function() { // create object method for calculating average velocity
        console.log("It's average velocity is " + (this.distanceMiles / this.timeHours) + " miles per hour.") // output velocity message to console
    },
    image: function() { // create object method for building complete ascii image of longboard
        console.log(this.deckImage); //output deck image twice to simulate width
        console.log(this.deckImage);
        console.log(this.trucksImage); //output trucks image
        console.log(this.wheelsImage); //output wheels image
    },
};
longboard.specs()
longboard.velocity()
longboard.image()

/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...

function favoriteDataTypes() { //create data types function
    let myString = "Strings Contain Everything!" //string type
    console.log(myString + " belongs to the data type: " + typeof myString);
    console.log("Strings are great because they contain straightforward chunks of data.");
    let myNum = 32 //num type
    console.log(myNum + " belongs to the data type: " + typeof myNum);
    console.log("Numbers are the building blocks of computer science and all life as we know it!");
    let myBoolean = true //boolean type
    console.log(myBoolean + " belongs to the data type: " + typeof myBoolean);
    console.log("Booleans are great because any statement you can think of can be declared only 'true' or 'false'. Coupled with the numbers 0 and 1, booleans make up the BINARY language");
}

favoriteDataTypes();


/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number (inner function multipies function by 3).

//your code...

let l = function multiple(x) { //higher order function
    return function fn(y) { //inner function
        return x * y //return product of x and y inputs
    }
}

let m = l(2) //enter any number in the parenthesis to return its tripled value.
console.log(m(3)) //Output the tripled value


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...

let stockGain = function(basis) { //declaring outer function stockGain, basis as parameter
    let message = " is how much the stock has increased."; //setup basic message
    let years = function(yrs) { //declare the years inner function, yrs as parameter
        let r = 0.05 //declare variable r with a %5 growth rate
        console.log('$' + ((basis * yrs) * r) + message); //setup calculated result message
    }
    return years; //return the years function
}
stockGain(85)(1); //call the initial stockGain function, passing in a basis value and yrs value
let futureValue = stockGain(85); //declare the futureValue variable and call the stockGain function again, passing in the basis value and futureValue(yrs) value.
futureValue(8);