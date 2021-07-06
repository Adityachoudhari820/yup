const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var trash , dustbin;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    trash = new Trash(100,100);
    ground = new Ground(600,height,1200,20)
    dustbin = new Dustbin(810, 220);
}
function draw(){
    background(0);
    Engine.update(engine);
    trash.display();
    ground.display();
    dustbin.display();
}