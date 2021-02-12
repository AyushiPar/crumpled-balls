
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here

	paper = new Paper();
	ground = new Ground(300,570,600,20);

	Lside = new Dustbin(480,520,10,100);
	Rside = new Dustbin (580,520,10,100);
	Bbin = new Dustbin(525,565,100,10);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

  paper.display();
  ground.display();

  Lside.display();
  Rside.display();
  Bbin.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-35});
	}
}



