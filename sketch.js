const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine1,world2;
var object,object2,ground,pig1,log1,log2,log3,log4,log5,box1,box2,box3,b0x4,box5;
function setup(){
  createCanvas(1200,400);
  engine1=Engine.create();
  world2=engine1.world;
  
  ground = new Ground(600,height,1200,20)

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810, 350);
  log1 = new Log(810,260,300, 90);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig3 = new Pig(810, 220);

  log3 =  new Log(810,180,300, PI/2);

  box5 = new Box(810,160,70,70);
  log4 = new Log(760,120,150, PI/7);
  log5 = new Log(870,120,150, -PI/7);
}


function draw(){
  background(0);
  Engine.update(engine1)
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  drawSprites();
}