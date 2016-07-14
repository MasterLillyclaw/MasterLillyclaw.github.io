
function makeImageBigger() {
  $("img").on("mouseenter", function () {
    $(this).animate({width : 900, height : 1100}, 2000);
  });
  $("img").on("mouseleave", function () {
    $(this).animate({width : 500, height : 600}, 2000);
  });
}

$(document).ready(makeImageBigger);


function changeImage() {
  $("imageOne").click(function () {
    if (document.getElementById("imageOne").src == "Lilli.jpg") {
      document.getElementById("imageOne").src == "ScottishFold.jpg";
    } else if (document.getElementById("imageOne").src == "ScottishFold.jpg") {
      document.getElementByID("imageOne").src == "Lilli.jpg";
    }
  });
}

$(document).ready(changeImage());
