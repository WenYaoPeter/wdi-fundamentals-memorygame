console.log('up and running!');
/*var cardOne = "queen";
var cardTwo ="queen";
var cardThree = "king";
var cardFour = "king";*/

//console.log("User Flipped" + " " + cardOne);
//console.log("User Flipped" + " " + cardFour);

var cards = [
{
	rank : "queen",
	suit : "hearts",
	cardImage : "images/queen-of-hearts.png"
},

{
	rank : "queen",
	suit : "diamonds",
	cardImage : "images/queen-of-diamonds.png"
},

{
	rank : "king",
	suit : "hearts",
	cardImage : "images/king-of-hearts.png"
},

{
	rank : "king",
	suit : "diamonds",
	cardImage : "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};



var flipCard = function(){ 
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank); 
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);

if (cardsInPlay.length === 2) {
	checkForMatch();
} 

};
var flipBack = function() {

	document.getElementsByTagName('img')[0].setAttribute('src', 'images/back.png');
	document.getElementsByTagName('img')[1].setAttribute('src', 'images/back.png');
	document.getElementsByTagName('img')[2].setAttribute('src', 'images/back.png');
	document.getElementsByTagName('img')[3].setAttribute('src', 'images/back.png');

};
//flipBack();


var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		
		var reset = document.getElementById('resetButton');
		reset.setAttribute('data-id', i);
		reset.innerHTML = "Reset!";
		reset.addEventListener('click', flipBack);
	}
};
createBoard();





/*var resetImages = function(){
	var reset = document.getElementById('resetButton');
	reset.innerHTML = "Reset!";
	reset.addEventListener('click', flipBack);
};
resetImages();*/
