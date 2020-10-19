var gameState = 0, playerCount , Datab , game ,form , player;
var hypnoticBall, database;
var position;
var allPlayers;
var car,car1,car2,car3,car4;
var cimage1,cimage2,cimage3,cimage4,timage,gimage;
var rank;


function preload(){
  cimage1 = loadImage("./images/car1.png");
  cimage2 = loadImage("./images/car2.png");
  cimage3 = loadImage("./images/car3.png");
  cimage4 = loadImage("./images/car4.png");
  timage  = loadImage("./images/track.jpg");
  gimage  = loadImage("./images/ground.png");

}
function setup(){
  Datab = firebase.database();
  console.log(Datab);
  createCanvas(displayWidth - 50,displayHeight - 50);

  game = new Game();
  game.getState();
  game.start();
}
function draw()
{
  if(playerCount === 4 && gameState === 0){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
  if(gameState === 2){
  game.end();
  }
}