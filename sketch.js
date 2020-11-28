const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var pig1,pig2,pig3;
var log1,log2;


function setup(){
    var canvas = createCanvas(1400,1400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    //box5 = new Box(150,100,50,50);
    //box6 = new Box(280,100,50,50);
    //box7 = new Box(200,100,50,50);
   // box8 = new Box(240,100,50,50);
   // box9 = new Box(280,100,50,50);
   // box10 = new Box(180,100,50,50);
   // box11 = new Box(150,100,50,50);
   // box12 = new Box(280,100,50,50);
    ground = new Ground(600,height,1200,20)
    Pig1 = new Pig(810,350);
    Pig2 = new Pig(810,220);
   // Pig3 = new Pig(180,200);
    log1 = new log(810,260,300,PI/2);
    log2 = new log(810,180,300,PI/2);
   
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    //box5.display();
   // box6.display();
   // box7.display();
   // box8.display();
   // box9.display();
  //  box10.display();
  //  box11.display();
   // box12.display();
    Pig1.display();
    Pig2.display();
   // Pig3.display();
    log1.display();
    log2.display();
   
}