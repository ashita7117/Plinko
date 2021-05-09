const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine,world;
var ground
var particle = [];
var plinkos = [];
var division = [];
var divisionHeight = 300;
var width = 480;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //bars 
  for (var k = 0; k <= width; k = k+80){
    division.push(new Divisor(k, 800 - divisionHeight/2,10,divisionHeight- 50));
  }

  //plinko layer 1
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75,10));
  }

//layer 2
  for (var j = 15; j <= width-10; j = j + 50){
    plinkos.push(new Plinko(j,175,10));
  }

//layer3
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275,10));
  }

//layer 4
  for (var j = 15; j <= width-10; j = j + 50){
    plinkos.push(new Plinko(j,375,10));
  } 
  
  //layer 5
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,475,10));
  }


   ground =new Ground(width/2,780,480,7);

}

function draw() {
  background("black");  
  Engine.update(engine);
  drawSprites();
  for(var i = 0; i < division.length; i++){
    division[i].display();
  }
  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  for(var i = 0; i < particle.length; i++){
    particle[i].display();
  }
   ground.display();
}