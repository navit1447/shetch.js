const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,ball,ground

function setup() {
  createCanvas(800,400);
 engine=Engine.create()
 world=engine.world
 
 var ground_option={
  isStactic:true
}
ground=Bodies.rectangle(400,390,800,10,ground_option)
World.add(world,ground)

 var ball_option={
   restitution:0.8
 }

  ball=Bodies.circle(200,200,10,ball_option)
  World.add(world,ball)

 
}

function draw() {
  background(255,255,255);
  Engine.update(engine)  
  circle(ball.position.x,ball.position.y,10)
  rectMode(CENTER)
 rect(ground.position.x,ball.position.y,800,10) 
}