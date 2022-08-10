// Problem 1 : convert radian to degree.


function radianToDegree (radian) {
    let degree = 0;
    if (typeof radian === 'number') {
        fullNumber = radian * 180 / Math.PI;
        // Taking only two digits after dacimal
        degree = parseFloat(fullNumber.toFixed(2));
    }
    else {
        degree = 'Enter a number!';
    }
    return degree;
}

const radian = 199;
const resultOfProblem1 = radianToDegree(radian);
console.log (resultOfProblem1);


// Problem 2 : Detect if the input file is a JavaScript file or not.


function isJavaScriptFile (fileName) {
    if (typeof fileName === 'string') {
        // Checking if .js is in the last of the string or not
        if (fileName.lastIndexOf ('.js') === fileName.length - 3) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        exception2 = 'Enter a String!';
        return exception2;
    }
}

const fileName = 'jpeg.js.cse.css.js';
const resultOfProblem2 = isJavaScriptFile(fileName);
console.log (resultOfProblem2);


// Problem 3 : Calculate total Oil price.


function oilPrice (Diesel,Petrol,Octane) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    let totalPrice = 0;
    //Checking if all inputs are valid numbers
    if (typeof Diesel === 'number' && typeof Petrol === 'number' && typeof Octane === 'number') {
        // Calculating total price of Oil
        totalPrice = dieselPrice * Diesel + petrolPrice * Petrol + octanePrice * Octane;
    }
    else {
        totalPrice = 'Enter numbers only!'
    }
    return totalPrice;
}
const Diesel = 0;
const Petrol = 2;
const Octane = 3;
const resultOfProblem3 = oilPrice (Diesel, Petrol, Octane);
console.log (resultOfProblem3);


// Problem 4 : Calculate Public Bus Fare


function publicBusFare (numberOfPeople) {
    let totalCost = 0;
    if (typeof numberOfPeople === 'number') {
        //Finding how many people has to take Public bus
        const withoutBusSeat = numberOfPeople % 50;
        const withoutAnySeat = withoutBusSeat % 11;
        const ticketPrice = 250;
        //Total ticket price of those people
        totalCost = withoutAnySeat * ticketPrice;
    }
    else {
        totalCost = 'Enter a number please!';
    }
    return totalCost;
}

const numberOfPeople = 365;
const resultOfProblem4 = publicBusFare (numberOfPeople);
console.log (resultOfProblem4);


// Problem 5 : Find the Best Friend DUO


function isBestFriend (personOne, personTwo) {
    //Making sure all the inputs are valid strings
    if (typeof personOne.name === 'string' && typeof personTwo.name === 'string' && typeof personOne.friend === 'string' && typeof personTwo.friend === 'string') {
        //Extracting elements from the object
        const personOneName =  personOne.name;
        const personOneFriend =  personOne.friend;
        const personTwoName =  personTwo.name;
        const personTwoFriend =  personTwo.friend;
        //Converting the strings to lowercase to prevent false output if any of the inputs has capital letters
        if (personOneName.toLowerCase() === personTwoFriend.toLowerCase() && personTwoName.toLowerCase() === personOneFriend.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        const exception = 'Enter a string!'
        return exception;
    }
}

const personOne = {name: 'abul' , friend: 'baBul'}
const personTwo = {name: 'babul' , friend: 'abul'}
const resultOfProblem5 = isBestFriend (personOne, personTwo);
console.log (resultOfProblem5);