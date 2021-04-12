//namespacing
const Engine = Matter.Engine 
const World = Matter.World 
const Bodies = Matter.Bodies 

var myengine, myworld, object;
var ball;
function setup() {
  createCanvas(400, 400);
  myengine = Engine.create();
  myworld = myengine.world;

  //JSON format
  var options = {
    isStatic: true
  }
  object = Bodies.rectangle(200, 380, 400, 20, options)
  World.add(myworld, object)

  var it = {
    restitution: 1.0
  }
  ball = Bodies.circle(200, 100, 20, it)
  World.add(myworld, ball)

}

function draw() {
  background(0);

  Engine.update(myengine)

  rectMode(CENTER);
  rect(object.position.x, object.position.y, 400, 20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20, 20)
}