var database
var form,player,game;
var gameState=0;
var playerCount;
var player1,player2,player3,player4,player5;
var players
var AllPlayers;
var edges;
var selectimp;
function preload(){
	startingimg=loadImage("starting.png")
	playingarea=loadImage("playingarea.jpg")
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	database=firebase.database();
	bg = createSprite(displayWidth/2,displayHeight/2);
	bg.addImage(playingarea);
	bg.scale = 1.5;

	game = new Game();
	game.getState();
	game.start();
	
 
  
}


function draw() {
  
if(playerCount===5){
	gameState=1;
		game.update(gameState);
	
		
}
if(gameState === 1){
	game.play();

}

 
}



