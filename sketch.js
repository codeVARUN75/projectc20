var car, wall;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  speed=random(20, 120);
  weight=random(500, 1000);
  car=createSprite(50, 200, 50, 50);
  car.velocityX= speed;
  car.shapeColor="red";
  wall=createSprite(1500,200,30,height/2 );
  wall.shapeColor="black";
}

function draw() {
  background("blue");
  if(wall.x-car.x<(wall.width/2+car.width/2)){
    car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;
  if(deformation<100){
    car.shapeColor=color(255);
  }
  if(deformation>180){
    car.shapeColor="red";
  }
  if(deformation>100 && deformation<180){
car.shapeColor="yellow";
  }
}
  drawSprites();
}