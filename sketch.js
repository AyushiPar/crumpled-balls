
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new Paper();
	ground = new Ground();

	Lside = new Dustbin(580,650,10,100);
	Rside = new Dustbin (780,650,10,100);
	Bbin = new Dustbin(680,650,200,10);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground.display();

  Lside.display();
  Rside.display();
  Bbin.display();
}



