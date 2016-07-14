
// MAKING THE BOX

var stringList = ["Grim", "visaged", "War", "hath", "smooth'd", "his",
  "wrinkled", "front"]

// finding the longest part of the stringList

function niceRegularBox(x) {
  var lengthOfStringList = x.length;
  var newArray = [];
  for(i = 0; i < x.length; i++) {
    newArray[i] = x[i].length;
  }

// making the longest part of the string the list length

  var Sorted = newArray.sort(function(a,b) {
    return b - a
  });
  var maxSize = Sorted[0];
  var sizeActual = maxSize + 2;

// setting the vertical length

  var sizeVertical = lengthOfStringList;

// making box top

  var top = [];
  for(i = 0; i < sizeActual + 2; i++) {
    top[i] = "-";
  }
  var topActual = top.join("")
  console.log(topActual);

  // make body, including sides

  var beginning = "| ";
  var ending = " |";
  var fillerSpaces = " ";
  for(i = 0; i < lengthOfStringList; i++) {
    var fillerNeeded = maxSize - x[i].length;
    var filling = fillerSpaces.repeat(fillerNeeded);
  console.log(beginning + x[i] + filling + ending);
  }

  // make bottom

  console.log(topActual);
}

console.log(niceRegularBox(stringList));
