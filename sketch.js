const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper1, ground, dustbinside1, dustbinside2, dustbinside3; 
function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    paper1 = new Paper(100,600, 10);
    ground = new Ground(400,680,800,20);
    dustbinside1 = new Dustbinside(610,660, 100, 20);
    dustbinside2 = new Dustbinside(550,620,20,100);
    dustbinside3 = new Dustbinside(670,620,20,100)
    
    Engine.run(engine); 
}
function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  ground.display();
  dustbinside1.display();
  dustbinside2.display();
  dustbinside3.display();
}
function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 15,y: -15})
    }
  }



