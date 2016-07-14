// Paste the helpful function here:

// Now use the function to add elements to the list!

function addListElements() {
  $("ul").append("<li> <strong> attached </strong> </li>");
  $("ul").after("<li> after </li>");
  $("ul").before("<li> before </li>");
  $("ul").prepend("<li> <strong> before </strong> </li>");
}

console.log(addListElements());
