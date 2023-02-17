
var trex, trex_correndo;

function preload(){
  trex_correndo = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  trex = createSprite(50,160,20,50);
  trex.addAnimation("correndo", trex_correndo);
  trex.scale = 0.5;
}

function draw(){
  background("white");

  if(keyDown("w") || keyDown("space") || keyDown("up")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.5;

  drawSprites();

}