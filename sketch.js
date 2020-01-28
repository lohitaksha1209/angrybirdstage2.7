//name space the Engine World Bodies 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//create engine world boxes and ground
var engine, world;
var box1,box2;
var ground;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
//create the 1st layer
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground=new Ground(600,390,1200,20);
    pig1=new Pig(810,350);
    log1=new Log(810,260,300,PI/2);
//create the second layer
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2=new Pig(810,220);
    log2=new Log(810,180,300,PI/2);
//create 3rd layer
     box5 = new Box(810,160,70,70);
     log3=new Log(760,120,150,PI/7);
     log4=new Log(870,120,150,-PI/7);
     //create the bird
     bird=new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    //display the 1st layer
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
  //display the 2nd layer
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    //display the 3rd layer
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    //display the bird
    bird.display();
}