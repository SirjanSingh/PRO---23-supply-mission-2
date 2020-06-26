var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var package;
 
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas = createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;


	engine = Engine.create();
	world = engine.world;



	//Create a Ground
	ground = new Ground();

	boxDown=new Box(400, 660, 200,20);

	boxRight= new Box(490,620,20,100)
	boxLeft= new Box(310,620,20,100)

     package= new Package(400,200,20,20);
	Engine.run(engine);

}


function draw() {
  background(0);
  Engine.update(engine);
  packageSprite.x= package.body.position.x;
  packageSprite.y= package.body.position.y;
  ground.display();
  boxLeft.display();
  boxRight.display();
  boxDown.display();
  package.display();
 
drawSprites();

}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(package.body,false);
  }

  if(keyCode===LEFT_ARROW){
	helicopterSprite.x=  helicopterSprite.x-8;
}
if(keyCode===RIGHT_ARROW){
	helicopterSprite.x=  helicopterSprite.x+8;
}
}




