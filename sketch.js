
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(960, 840);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	var ball_options={
 	isstatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2

	}
  
	ball = Bodies.circle(100,200,20,ball_options);
	World.add(world,ball);

	groundObj =new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	rightSide =new ground(1300,600,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
 
}
function keyPressed(){
	if(keycode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.08,y:0});
	}
}


