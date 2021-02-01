
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,paper,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	d1 = createSprite(560,300,20,40);
	d2 = createSprite(560,340,40,20);
	d3 = createSprite(600,300,20,40);
	paper = new Paper (100,300,10);
	
}


function draw() {
  rectMode(CENTER);
  background("black");
  
paper.display(); 
drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {
			x:12,
			y:-13
		});
	}
}

