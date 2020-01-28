// Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".
const hasString = str => {
  if (str.includes("JavaScript")) {
    console.log(`I know it's crazy 😉`);
  }
};
//call the function..
hasString("This is my JavaScript string");

// Create a function that calculates the user age e.g. 2000 -> 20.

const userAge = num => {
  let d = new Date();
  let currentYear = d.getFullYear();
  return currentYear - num;
};

//call de function
console.log(userAge(1989));

// Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.
const monthNames = [
  "January",
  "Feb",
  "Mac",
  "April",
  "Mai",
  "June",
  "July",
  "Aug",
  "Sept",
  "Okt",
  "Nov",
  "Dec"
];

function nameOfThatMonthEasyWay(num) {
  let result = "";

  let newNum = num - 1; // what is -1 ???
  if (num >= 1 && num <= 12) {
    result = monthNames[newNum];
  } else {
    result = "Sorry is not a a month";
  }
  return result;
}
console.log(nameOfThatMonthEasyWay(10)); // Okt

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

function dictionary(str, word) {
  let sliceWord = word.substr(0, str.length);

  if (str === sliceWord) {
    console.log("True");
  } else {
    console.log("False");
  }
}
dictionary("tri", "triplet");

// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed
const twofer = who =>
  typeof who === "undefined"
    ? `Two for me and one for you`
    : `Two for me and one for ${who}`;

// call de functions
console.log(twofer("Ali")); // -> "Two for me and one for Ali"
console.log(twofer()); // -> "Two for me and one for you"

// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it. The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 8 (2 to the power of 4), If you call it with just 2, it should return 4 (2 to the power of 2).
const exponent = (num, exp) => {
  let result = 1;

  typeof exp === "undefined" ? (exp = 2) : exp;

  for (let i = 0; i < exp; i++) {
    result *= num;
  }

  return result;
};

//call de functions
console.log(exponent(3, 3)); // -> 27
console.log(exponent(2)); // -> 9

// Create a function will calculate a student degrees for 6 subjects,
//if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)

let notes = [60, 80, 80, 90, 50, 50];

//using .map
const average = array => {
  let sum = 0;

  array.map(value => (sum += value));
  finalNote = sum / array.length;

  if (finalNote < 70) {
    return "F";
  } else if (finalNote > 70 && finalNote < 80) {
    return "C";
  } else if (finalNote > 80 && finalNote < 85) {
    return "B";
  } else if (finalNote > 85 && finalNote < 90) {
    return "C";
  } else {
    return "A+";
  }
};
console.log(average(notes));

// Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// * print all the user input adding the greeting part and more text turning that input into a readable text.
// * If one of his activities was dance ￼or party print "you are cool".
let user = {
  name: "Juca",
  age: 30,
  adresse: "Landgrafen 10787 Berlin",
  activities: ["Gym", "Dance"]
};

function printUser(arg) {
  //get his activities
  let activities = "";

  for (i = 0; i < arg.activities.length; i++) {
    activities += arg.activities[i] + " ";
  }

  if (activities.includes("Dance") || activities.includes("Party")) {
    activities += "and you are cool";
  }

  let composeMsg = `Hello ${arg.name}! You have ${arg.age} and live at ${arg.adresse} and you like your favorites activities are: ${activities}`;
  return composeMsg;
}

//Call the function
console.log(printUser(user));