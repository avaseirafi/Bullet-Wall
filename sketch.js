var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  thickness=random(22,83);
  weight=random(400,1500);
  wall = createSprite (1200,200,thickness,height/2);

  bullet = createSprite (50,200,70,50);
  bullet.weight=random(30,52);
  bullet.speed=random(223,321);
  bullet.velocityX = speed; 
}

function draw() {
  background(255,255,255); 
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor="red";
      bullet.velocityX = 0;
    }

    if (damage<10){
      wall.shapeColor="green";
      bullet.velocityX = 0;
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;

}