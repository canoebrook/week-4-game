
$(document).ready(function() {

var wins=0;
var losses=0;

var cgame = {

  targetNumber : 0,
  counter : 0,
  numberOptions : [],


initGame : function() {
  counter=0;
  targetNumber = Math.floor(Math.random()*102)+19;
  $("#number-to-guess").text(targetNumber);
  $("#number-of-wins").text(wins);
  $("#number-of-losses").text(losses);

  numberOptions = [];

  for (let i = 0; i < 4; i++) {
    numberOptions.push(Math.ceil(Math.random()*12));

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
    // $("#number-to-guess").text(targetNumber);

  }
  $(".crystal-image").click(cgame.clickImage);

},

detachImg : function () {
    var images = document.getElementsByTagName('img');
    for(let l=images.length; l>0; l--) {
      images[0].parentNode.removeChild(images[0]);
    };
},

clickImage : function () {
  var crystalValue = parseInt($(this).attr("data-crystalvalue"));
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;
  // counter = counter + crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
    wins++;
    cgame.detachImg();
    cgame.initGame();
  }

  else if (counter > targetNumber) {
    alert("You lose!!");
    losses++;
    cgame.detachImg();
    cgame.initGame();
  }


},
};
 
cgame.initGame();
});

