function showWhenClicked() {
  $("#pig").fadeIn();
}

function hideWhenClicked() {
  $("#pig").fadeOut();
}

function flyWhenClicked() {
  var nextPig = $("#pig").clone();
  $(nextPig).attr("id", "pig2");
  $("#pig").before(nextPig);

  $("#pig").animate({
    marginLeft: 500,
    width: 50
  });
  $("#pig").fadeOut();
}

function setup() {
  $("#showPig").click(showWhenClicked);
  $("#hidePig").click(hideWhenClicked);
  //$("#flyPig").click(flyWhenClicked);
  $("#pig").click(flyWhenClicked);
}

$(document).ready(setup);
