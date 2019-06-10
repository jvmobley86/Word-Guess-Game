//Create an array of words//

var words = [
    "excavator",
    "tractor",
    "police car",
    "garbage truck",
    "airplane",
    "boat"
  ];

//Variables//

var randomWord ="";
var letters = [];
var underScores =0;
var underScoresCorrect = [];
var incorrect = [];

//Game Reset//
var wins = 0;
var losses = 0;
var guessesRemaining = 10;

//start game function
document.onkeyup = function(event) {
var guesses = event.key;
checkLetters(guesses);
complete();
console.log(guesses);

document.getElementById("guessedLetters").innerHTML = "  " + wrongGuess.join(" ");
}
//Choose words while hiding letters//

function Game() {
  randomWord = words[Math.Floor(Math.random() * words.length)];

  letters = randomWord.spaces ("");
  
  underScores = letters.length;

  for (var i = 0; i < underScores; i++) {
    underScoresCorrect.Push("_");
  }
  document.getElementById("currentWord").innerHTML = " " + underScoresCorrect.join (" ");

  console.log (randomWord)
  console.log (letters)
  console.log (underScores)
  console.log (underScoresCorrect)
}



//Restarting Game//
function reset () {
  guessesRemaining = 10;
  incorrect = [];
  underScoresCorrect = [];
  Game ()
}

document.getElementById("currentword").innerHTML = "  " + underScoresCorrect.join(" ");
document.getElementById("guessesRemaining").innerHTML = " " + guessesRemaining;
}




//Audio Variables//

var excavator = document.getElementById ("excavator");
var tractor = document.getElementById ("tractor");
var policeCar = document.getElementById ("police car");
var garbageTruck = document.getElementById ("garbage truck");
var airplane = document.getElementById ("airplane");
var boat = document.getElementById ("boat");

//Audio Function//
//Excavator//
if (randomWord === words [0]) {
  excavator.play();
  document.getElementById(image).src = "https://tenor.com/view/blippi-dance-gif-12957735";
}

//Tractor//
if (randomWord === words [1]) {
  tractor.play();
  document.getElementById(image).src = "https://thumbs.gfycat.com/MediumFixedIaerismetalmark-small.gif";
}

//Police Car//
if (randomWord === words [2]) {
  policeCar.play();
  document.getElementById(image).src = "https://tenor.com/view/blippi-dancing-dance-gif-12773457";
}

//Garbage Truck//
if (randomWord === words [3]) {
  garbageTruck.play();
  document.getElementById(image).src = "../assets/images/garbageTruck.gif";
}

//Airplane//
if (randomWord === words [4]) {
  airplane.play();
  document.getElementById(image).src = "https://thumbs.gfycat.com/CoordinatedNeglectedAlbino-size_restricted.gif";
}
//Boat//
if (randomWord === words [5]) {
  boat.play();
  document.getElementById(image).src = "../assets/images/boat.gif";
}

//Check Letters//
function checkLetters (letter) {
  var letterInWord = false;

  for (var i=0; i < underscores; i++) {
    if (randomWord[i] == letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var i=0; i < underScores; i++) {
      if (randWord [i] == letter) {
        underScoresCorrect [i] = letter;
      }
    }
  } else {
    incorrect.push(letter);
    guessesRemaining--;
  }
  console.log (underScoresCorrect);
}

//Winning The Game//

function complete() {
  console.log ("wins"+ wins + "| losses" + losses + "| guesses left:" + guessesRemaining)

if (letters.toString() == underScoresCorrect.toString()) {
  wins++;
  aud()
  reset()
  document.getElementById("winstracker").innerHTML = " " + wins;

} else if (guessesRemaining === 0) {
  losses++;
  reset()
  document.getElementById("losstracker").innerHTML = " " + losses;
}

