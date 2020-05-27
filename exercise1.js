//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

//your code...


function fahToCel(fah) //part 1
{
    var fahTemp = fah; //declaring input variable, current temperature in F
    var fToC = ((fahTemp - 32) * 5 / 9); //formula for Fahreneheight to Celsius
    var convertmsg = fahTemp + '\xB0 Fahrenheight is ' + fToC + '\xB0 Celsius.'; //setup output message using special character code for "degrees" symbol.
    console.log(convertmsg); //Logging for trackable output
}

function celToFah(cel) //part 2
{

    var celTemp = cel; //declaring input variable, current temperature in C
    var cToF = celTemp * 9 / 5 + 32; //formula for Celsius to Fahrenheight
    var convertmsg = celTemp + '\xB0 Celsius is ' + cToF + ' \xB0 Fahrenheight.'; //setup output message using special character code for "degrees" symbol.
    console.log(convertmsg); //Logging for trackable output
}
fahToCel(87); //Execute the function
celToFah(22); //Execute the function




/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...


function votingage(age) { //Define voting age function
    if ((age >= 18) && (age < 80)) { //if scenario 1
        var verifymsg = age + ', huh? ... Yes, looks like you are all set to vote!';
        console.log(verifymsg);
    }

    if (age >= 80) { //if scenario 2
        var oldmsg = age + ', huh? ... Yes, with old age comes wisdom, enjoy voting!';
        console.log(oldmsg);
    }

    if (age <= 17) { //if scenario 3. No "else" statement required.
        var denymsg = age + ', huh? ... No, not quite old enough yet. But I applaud your enthusiasm!';
        console.log(denymsg);
    }
}
votingage(16); //execute voting age function with age parameter


/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...

function splitItJoinIt() { //Define string splitting and joining function
    var ustring = 'The five boxing wizards jump quickly'; //define the input string
    var stringArray = ustring.split(' '); // split string on space
    console.log(stringArray); //output the split array
    var joinedString = stringArray.join(' '); // join string on space
    console.log(joinedString); //output the joined string
}

splitItJoinIt(); //execute split and join function

/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...

function phonenumreverse(digits) {
    var digToString = digits.toString().split(''); // split number and convert to string
    console.log(digToString); //output phone number in array for verification
    var reverseArray = digToString.reverse(); //reverse array
    console.log(reverseArray); //output reversed array for verification
    var reversedNumber = reverseArray.join(''); // join reversed array into number
    var outputMsg = 'Your reversed phone number is, ' + reversedNumber + '. Have a great day!'; //setup output message
    console.log(outputMsg); //output reversed phone number
}

phonenumreverse(5556864444);


/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...

function createCar() { //create car function
    var car = { year: 0, color: "x", make: "x", model: "x" }; //define default car specs
    var newCar = car; //initialize "newCar" object from "car" object
    newCar.year = 2012; //define the year param
    newCar.color = "Silver"; //define the color param.
    newCar.make = "Lexus"; //define the make param.
    newCar.model = "IS-250" //define the model param.
    console.log(newCar); //output newCar specs to console
}
createCar(); //execute create car function


/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.


//your code...

function loopIt() { //declare function loopIt
    for (numb = 0; numb < 16; numb++) { //start for loop with the 0-15 conditions, incrementing each loop
        console.log(numb); //log each number in the loop
        if (numb > 0 && numb % 2 === 0) { //if the num is greater than zero AND if 2 modulus the number absolutely equals zero
            console.log('Even'); //log the number in this loop is Even
        }
        if (numb === 0) { //if the number does absolutely equal zero
            console.log('N/A'); //log a "not applicable" message
        }
        if (numb % 2 != 0) { //if the number modulus 2 does not equal zero
            console.log('Odd'); //log the number in this loop is Odd
        }
    }
}
loopIt(); // execute the function

/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...
function TEKcamp() { //YAY!!
    for (numb = 1; numb < 101; numb++) { // begin for loop at number 1 through 100, increment each loop
        if (numb % 3 === 0 && numb % 5 != 0) { //if the number is divisible by 3 and NOT divisible by 5
            console.log('TEK'); //print TEK
        }
        if (numb % 3 != 0 && numb % 5 === 0) { //if the number is not divisible by 3 and divisible by 5
            console.log('camp'); //print Camp
        }
        if (numb % 3 === 0 && numb % 5 === 0) { //if the number is divisible by 3 and is also divisible by 5
            console.log('TEKcamp'); //print TEKcamp
        } else {
            console.log(numb); //otherwise, just print the number
        }
    }
}
TEKcamp(); //Run that puppy!


/************************************************************* */
// Problem 8:
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...

for (let i = 0; i < nums.length; i += 3) { //opens a for loop where i = 0 and iterates three values up each loop until the end of the length array
    console.log(nums[i]); //console log the nums array with [i]
}

// Problem 9:
const foodArray = ['potatoes', 'tamales', 'lemon', 'strawberries', 'chocolate', 'pudding', { school: 'TEKcamp' }];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

var last_item = foodArray[foodArray.length - 1];

console.log(last_item.school);


const adjectiveArray = ['salty', 'spicy', 'sour', 'sweet', 'rich', 'creamy', 'amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural. "Potatoes are salty", "Lemon is sour".

for (let index = 0; index < foodArray.length; index++) {
    if (foodArray[index].school) {
        console.log(foodArray[index].school + ' is ' + adjectiveArray[index])

    } else if (foodArray[index].endsWith('s')) {
        console.log(foodArray[index] + ' are ' + adjectiveArray[index])
    } else {
        console.log(foodArray[index] + ' is ' + adjectiveArray[index])
    }
}



/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
const operations = ["+", "-", "*", "/"];

function doMath() {
    let expression = '2 ' + operations[Math.floor(Math.random() * Math.floor(3))] + ' 4'
    console.log(expression + " = " + eval(expression));
};

doMath()