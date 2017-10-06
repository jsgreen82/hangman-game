/*randomly choose a word
display blanks for letters in word
guesses by onkeyup
display letters guessed
replace blanks with correct letters
ability to fill in letters once you know word?
number of wins
number of guesses remaining
after win/lose game chooses a new word
play sound with win
*/

var wins = 0;


//random word chosen
(function(){
	var remainingGuesses = 9;
	var getWord = function() {
	var artists = ['picasso', 'monet', 'warhol', 'dail', 'kandinsky', 'vangogh', 'davinci', 'rothko', 'matisse', 'pollock', 'duchamp', 'klee'];
	var possibleWord = artists[Math.floor(Math.random() * artists.length)];
	document.getElementById("current-answer").innerHTML = possibleWord;

//gennerate dashes
var originalLength = possibleWord.length;
for (i = 0; i < originalLength; i++){
	possibleWord = [possibleWord.slice(0, i*2+1), ' ', possibleWord.slice(i*2+1)].join('');
}
var dashes = "";
var wordLength = possibleWord.length;

for (i = 0; i < wordLength; i++){
	var x = possibleWord.charAt(i);

	if(x === " " || x === "/")
	{
		dashes += x;
	}
	else {
		dashes += "_";
	}
	}
	document.getElementById("dashes").innerHTML = dashes;
};
//play
document.onkeyup = function(keyUp) {
	var keyUp = keyUp || window.event,
	charCode = keyUp.keyCode || keyUp.which,
	lettersGuessed = String.fromCharCode(charCode);

	document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
	document.getElementById("remainingGuesses").innerHTML = remainingGuesses;

	remainingGuesses--;

	if (remainingGuesses === -1) {
		alert("You Lose!");
	}
}
getWord();
})();
