const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2,box3,box4,box5,box6,box7;
var circle1,circle2,circle3,circle4;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 =  new Box(80,320,10,200);
    box2 =  new Box(320,320,10,200);
    box3 =  new Box(120,330,50,150);
    box4 =  new Box(280,330,50,150);
    box5 =  new Box(200,320,80,250);
    box6 =  new Box(50,320,10,240);
    box7 =  new Box(350,320,10,240);
    box8 =  new Box(200,190,80,10);

    circle1= new Circle(320,220,35);
    circle2= new Circle(80,220,35);
    circle3= new Circle(350,210,35);
    circle4= new Circle(49,210,35);


    ground= new Ground(400,400,800,5);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    circle1.display();
    circle2.display();
    circle3.display();
    circle4.display();

    triangle(160, 180, 240,180,180,90);

    ground.display()
}