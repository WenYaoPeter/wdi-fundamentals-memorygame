console.log('up and running!');
/*var cardOne = "queen";
var cardTwo ="queen";
var cardThree = "king";
var cardFour = "king";*/

//console.log("User Flipped" + " " + cardOne);
//console.log("User Flipped" + " " + cardFour);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
console.log("User flipped" + " " + cardsInPlay); //user flipped first queen

cardsInPlay.push(cardTwo);
console.log("User flipped" + " " + cardsInPlay); //user flipped first king

if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, please try again");
	}

}