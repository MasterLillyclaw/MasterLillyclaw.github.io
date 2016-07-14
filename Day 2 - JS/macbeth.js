
// DAY 2: CUCUMBER SHARKS

console.log("And all our yesterdays are lighted fools");
console.log("The way to dusty death");

var chicken = "Kentucky Fried Chicken?";
var sushi = "Wherefore art thou,";

console.log(sushi + "\n" + chicken);

if(!2==5){
  console.log(sushi + " " + chicken);
}

function goGetLunch(name) {
  alert("It's lunchtime!");
  alert("Let's go, " + name);
}

// goGetLunch("CucumberSharks!");
// goGetLunch(sushi + "\n" + chicken + 45);

// coupon is fraction you pay
// coupon = 0.8 means you get 20% off

function checkout(item1, item2, item3, coupon) {
  return item1 + item2 + item3 * coupon;
}

var totalCost = checkout(1, 1.50, 8, .9);
  console.log("My total cost is " + totalCost);

// break

function timesTwo(x) {
  return 2 * x;
}

function timesSix(x) {
  return timesTwo(x) + timesTwo(x) + timesTwo(x);
}

var result = timesSix(3);

console.log("I got the answer " + result + ".");

//break

function timesN(x, n) {
  return x * n;
}
var number1 = 6;
var number2 = 8;
var answer = timesN(number1, number2);

console.log("When I multiply " + number1 + " times " + number2
  + ", I get " + answer + ".");

// break

var animal = "ELEPHANTBEARMOUSECOW";

console.log(animal.substring(0, 12)
  + animal.toLocaleLowerCase(12, 17).substring(12, 17)
  + animal.substring(17,20));

// break

function tigerMom(gpa) {
  if (gpa > 4.0 || gpa < 1.0) {
    return "IMPOSSIBURU!";
  } else if (gpa == 4.0) {
    return "You passed.";
  } else if (gpa < 4.0 && gpa > 3.5) {
    return "Try harder!";
  } else {
    return "You had better not sleep.";
  }
}

// break

function skeeterRating(score) {
  if (score > 450 || score < 0) {
    return "Inconveivable!";
  } else if (score <= 450 && score >=350) {
    return "Great!";
  } else if (score < 350 && score >=250) {
    return "Good.";
  } else if (score < 250 && score >=150) {
    return "Decent.";
  } else {
    return "Pretty bad!";
  }
}

// break

function Fizzbuzz(x, division) {
  if (division == 3) {
    return "Fizz";
  } else if (division == 5) {
    return "Buzz";
  } else {
    return x;
  }
}

// break

function reverseMidCapitalize(x) {
  var midVar = x.length / 2;
  var roundMid = Math.floor(midVar);
  if (x.charAt(roundMid) == x.charAt(roundMid).toLocaleUpperCase()) {
    return x.substring(0, roundMid)
      + x.charAt(roundMid).toLocaleLowerCase()
      + x.substring(roundMid, x.length);
  } else {
    return x.substring(0, roundMid)
    + x.charAt(roundMid).toLocaleUpperCase()
    + x.substring(roundMid, x.length);
  }
}

// break

var letters = ["A", "B", "C", "D", "E"];

function chopAndFlip(arrayName) {
  var cut = Math.floor(arrayName.length / 2);
  var array1 = arrayName.slice(0, cut);
  var array2 = arrayName.slice(cut, arrayName.length);
    return array2.concat(array1);
}

// break

var numbers = [2, 3, 5, 7, 11, 13, 17, 23];
// var i = 0;

// while(i < numbers.length) {
  // console.log("The number is " + numbers[i] + ".");
  // numbers[i]++;
  // i++;
// }

for(var i = 0; i < numbers.length; i++) {
  numbers[i] += 2;
}

// break

function doubleNumbers(change) {
  for(var i = 0; i < change.length; i++) {
    change[i] = change[i] * 2;
    alert(change[i]);
  }
}

function myFavorites(movie) {
  for(var i = 0; i < movie.length; i++) {
    alert("My favorite movie is " + movie[i] + "!");
    movie[i]++;
  }
}

function reverse(swap) {
  var newArray = [];
  for(var i = swap.length - 1; i >= 0; i -= 1) {
    newArray.push(swap[i]);
  }
  return newArray;
}

// function twine(x, y) {
  // var result = [];
  // if(x.length > y.length) {

  // }
// }

var fruitColors = {
  "apple" : "red",
  "tangerine" : "orange",
  "watermelon" : "green"
}

// break
