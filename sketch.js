
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(400,350,250,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  roof1.display();
  drawSprites();
 
}



