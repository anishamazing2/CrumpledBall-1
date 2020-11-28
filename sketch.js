const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var recyclingBin, crumpledBall, ground;
var engine, world;

function setup() 
{
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	crumpledBall = new Paper(80, 450, 70);
	ground = new Ground(600, 600, width, 20);
	recyclingBin = new Recyclingbin(1000, 580);

	Engine.run(engine);
}

function draw()
{
	background(230);
	rectMode(CENTER);
  
	ground.display();
	recyclingBin.display();
	crumpledBall.display();
	
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Body.applyForce(crumpledBall.body, crumpledBall.body.position, {x: 110, y: -100});
	}
}