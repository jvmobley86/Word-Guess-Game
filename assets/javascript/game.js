

//Create an array of words//

var words = [
    "excavator",
    "tractor",
    "police car",
    "garbage truck",
    "airplane",
    "boat"
  ];

  //Pick a random word//  

  var word = words[Math.floor(Math.random() * words.length)];

  //Set up answer array//

  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  var remainingLetters = word.length;

  //Initiate game loop//
  while (remainingLetters > 0) {
    //Show players their progress//
    alert(answerArray.join(" "));    
    
//Get a guess from the player//

// document.onkeyup = function (event) {
//     var answer = event.key;
//     if (question_being_asked && (answer == "t" || answer == "f")) {
//         if (questions_array[current_idx].a == answer) {
//             alert("Great!!");
//         } else if (userkey = "f") {
//             alert("Well, that's no good.")
//         }
// document.getElementById("lettersPlaceholder").innerHTML = ("testing");