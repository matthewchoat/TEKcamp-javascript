//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 



//your code...
isEmpty = str => str === ""; //simple, a function isEmpty is created and passed the "str" variable; the str variable is then absolute compared with an empty string. Results are returned automatically without needing the command.

isEmpty(" ") //even with just one space, should still return false.

//isEmpty("") //should return true.
//isEmpty("a")//should return false


/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 



//your code...

let str = "Learning JavaScript is fun."; //declare string variable
let changeling = str.replace(/fun/gi, "RAD!"); //replace primitive

console.log(str); //log original string
console.log(changeling); //changed string


/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 

//your code...


function squareIt() { //create squareIt function
    let array = [1, 2, 3, 4, 5]; //declare array
    return array.map(i => i ** 2) //map the array, squaring each value and returning it
}
console.log(squareIt()) //console log the function

/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.

//your code...

let = longArray = [1, 3, 5, 7, 9, 1, 3, 5] //declaring longArray

overThree = () => longArray.filter(i => i > 3) //my overThree function applies a filter to longArray to only include indexes above number 3

console.log(overThree()); //call function



/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 

//your code...

let = fiveArray = [5, 10, 15, 20, 25]

let sumIt = fiveArray.reduce(function(a, b) { //using the reduce function and pulling in a, b
    return a + b; //returning the sum of a + b, which will give us the sum of the entire array
}, 0); //zero is the initialValue - the value to use as the first arguement to the first call of the callback

console.log(sumIt); // prints the sum of the array


/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  



//your code...

let pairDNA = function(DNAstring) { //creating a function to pair the DNA
    const toArray = DNAstring.split('') //splitting the string input into an array
    return toArray.map(i => { //mapping by i
        switch (i) { //switch statement bringing in our mapped index value
            case 'G': //create all cases for returning the correct pairs
                return 'C'
                break;
            case 'C':
                return "G"
                break;
            case 'T':
                return 'A'
                break;
            case 'A':
                return 'T'
                break;
        }
    })
}
console.log(pairDNA("GCTA"));


/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2, 23, 1, 2, 1, 1, 1, 2, 2.5, 20, 200, 2000, , { k: 1 }, 20000, 19999, 1878, 140, 23, 4, "sk", true, true, "true-dat", "nice", "one", "two", "three", "3", "tea", []];


var fnum = numbers.filter(num => !isNaN(num) && typeof num != 'boolean').map(nbr => Number(nbr)); //create fnum function, filter the numbers, filter out anything that is not a number or is a boolean. Map the numbers.
console.log(fnum); //log our fnum array
console.log(Math.max(...fnum)) //determine the maximum value of fnum and flatten the array (using the spread "..." command explained in my bonus exercise below!)


// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

//function sortNums(numbers, desc = false) {
//YOUR CODE 
fnum.sort(function(a, b) { return b - a }); //using the sort function combined with returning b - a which sorts the entire array in descending order



/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
const obj = { company: "TEKsystems" }
mapObj.set(obj, "object"); //my new objects
mapObj.set(1, "integer");
mapObj.set(true, "boolean");
mapObj.set([1, 2, 3], "array");
mapObj.set(3.36, "float");
mapObj.set("dog", "string");

//console.log(mapObj.has({company : "TEKsystems"}));  //commenting out false statement, see my console.logs below for explanation.

//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...
console.log(mapObj.has(obj)); //we are referencing an actual object now (see "const obj = ..." line above), not just a mapObj.
console.log("This statement is true because now they're the same object. They exist in the same block of memory")

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
mapObj.values() //can loop through the values with this simple command. Can replace "values()" with "keys()" if I only wanted to see the keys.

/************************************************************* */
//Problem 11:

let ones = [1, 11, 111, 1111, 11111, 111111, 1111111, 11111111, 111111111, 1111111111];
//reverse the array, without modifying the ones array.
let onesTwo = [] //declare new array to put our reversed array in
let rev = 0 //set reverse variable to zero

for (i = ones.length - 1; i >= 0; i--) { //create for loop iterating backwards by one for the length of the array
    onesTwo[rev++] = ones[i]; //add the reversed array elements into the second array
}

console.log(onesTwo); //log the reversed array


/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

function performer(cb) {
    //code goes here
    return cb() //returning the callback function inside the first-class function
}
performer(fn => ("Hello TEK")); // inside the performer function, create a function to add "Hello TEK" to the callback output. no "return" command necessary since no block "{}"



/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

//I'll be explaining the "spread" operator in ES6 and showing a few use case examples

let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];

// Before ES6, we could push an array onto another array like so:
//arrayOne.push(arrayTwo);
//console.log(arrayOne); // However, when we output this, we get the result of [1,2,3,[4,5,6]]. So, the second array has been pushed into the first array, but the two arrays are still separate, just one resides within the other, like a child>parent.

arrayOne.push(...arrayTwo); // When we use the spread operator(...), the inner array will be deconstructed and its elements will be added to the end of the outer array.
console.log(arrayOne); // [1,2,3,4,5,6] Now we console log the first array and see that the numbers from arrayTwo have been successfully added!

//We can use the spread operator to obtain each individual element without doing an iteration, this is very helpful in many situations.

//since the spread operator also works with objects, we can use it to clone an object without using Object.assign

let switchGame = { title: 'Streets of Rage 4', reviewScore: 4, genre: 'beat-em-up', players: 4 }

let pcGame = {...switchGame, title: 'Beats of Rage', reviewScore: 3 }; // Clone switchGame object and modify any properties you don't wish to be cloned

console.log(pcGame); //output the cloned object
console.log(switchGame); // output the original object

//coming back to the spread operator using arrays, let's also look at an example where we want to spread the contents of an array into a function.

let grades = [81, 65, 90]; //we initialize our "Grades" variable.

function avgGrades(a, b, c) { //we write a separate function and pass in 3 params a,b, and c (which will eventually be our grades from the array)
    let sum = a + b + c; //then, we define our summation logic by adding the three params together
    return sum / 3; //we then divide the sum of all params by three to get the average
}

console.log(avgGrades(...grades)); //when we log the function, we include the spread operator and our "grades" array. The result is calculated and displayed to the console!