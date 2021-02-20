var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 600);

	// fairyVoice.play();

	fairy = createSprite(130, 500);
	fairy.addAnimation("fairyflying",fairyImg); 
	fairy.scale =0.20;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	Engine.run(engine);
}

function draw() {
  background(bgImg);

    keyPressed();

	star.x = starBody.position.x  
    star.y = starBody.position.y  

	if(star.y > 470 && starBody.position.y > 470){
		Matter.Body.setStatic(starBody,true);
	 }

  drawSprites();

}

function keyPressed() {
	fairy.velocityX = 0;
	fairy.velocityY = 0;
	if(keyDown("RIGHT_ARROW")){
      fairy.velocityX = +5.5;
	}
	if (keyDown("LEFT_ARROW")) {
		fairy.velocityX = -5.5;
	  }

	if(keyDown("DOWN_ARROW")){
		star.velocityY = 8;
		Matter.Body.setStatic(starBody,false);
	}  
}
