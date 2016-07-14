
// You will save your code during today's demos and exercises here.

function updateFrame() {
  $("#string").fadeOut();
}

//console.log(updateFrame());

function renewFrame() {
  $("#string").fadeIn();
}

//console.log(renewFrame());

function setupHandlers2() {
  $("img").on("mouseenter", function () {
    $(this).fadeOut();
  });
  $("button").click(function() {
    $("img").animate({ width : 200}, 2000);
  });

    //$("img").on("mouseleave", function () {
      //$(this).animate({ width: 50 }, 2000);
    //});
    $("img").click(function () {
      $(this).animate({ "marginLeft" : "+=30px"
    });
  });
}

$(document).ready(setupHandlers2);

// break

function setupHandlers() {
  var isReaction = false;
  var reactionTime;

  $("#PEP").click(function () {
    console.log("click");
    var d = new Date();

    if (!isReaction) {
      isReaction = true;
      reactionTime = d.getTime();
      console.log(reactionTime);
    } else {
      var endTime = d.getTime();
      console.log(endTime - reactionTime);
      isReaction = false;
    }
  });
}

$(document).ready(setupHandlers);
