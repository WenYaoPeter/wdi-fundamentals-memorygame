console.log('up and running!');
/*var cardOne = "queen";
var cardTwo ="queen";
var cardThree = "king";
var cardFour = "king";*/

//console.log("User Flipped" + " " + cardOne);
//console.log("User Flipped" + " " + cardFour);

var cards = ["queen", "queen", "king", "2king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function (cardId){ //the function when user flips a card
	
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]); // first queen pushed to cardsInPlay array


if (cardsInPlay.length === 2) {
	checkForMatch();
}

};
flipCard(0);
flipCard(1);
