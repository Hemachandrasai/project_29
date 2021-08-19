const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var stones = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  rightwall = new Base(width/2+620,height-200,200,150);
  leftwall = new Base(width/2-620,height-200,200,150);
  joinPoint = new Base(width/2-655,height-200,200,150);
  bridge = new Bridge(27,{x:leftwall.body.position.x-20,y:height-280});

  Matter.Composite.add(bridge.body,joinPoint);
  joinLink = new Link (bridge,joinPoint);

for(var i = 0;i <= 8;i++){
  var x = random(width/2-200,width/2+300);
  var y = random(-200,40);
  var stone = new Stone(x,y,40,40);
  stones.push(stone);
}

}

function draw() {
  background(51);
 
leftwall.display();
rightwall.display();
joinPoint.display();
bridge.show();
for(stone of stones){
  stone.display();
}
//for (var i = 0;i<stones.length;i++){
 // showStone(i,stones);
//}


Engine.update(engine);
}
//function showStone(index,Stones){
//Stones[index].display();
//}

