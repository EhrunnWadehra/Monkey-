
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600)
  
  monkey = createSprite(60,510,20,20); 
  monkey.addAnimation("animation",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(300,580,1200,20)
  ground.velocityX = -5;
  
  survivalTime = 0;
  
  FoodGroup = new Group();
  obstacleGroup  = new Group();
}


function draw() {
background("white");
 
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("SPACE")){
    monkey.velocityY = -15;  
  }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground);
  
  
  
  spawnObstacles();
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1)
    FoodGroup.setLifetimeEach(-1);
  }
  spawnFood();
  drawSprites();
  stroke("white");
  textSize(20);
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival time: "+ survivalTime,400,50);
}

function spawnFood(){
  if(frameCount%80 === 0){
   banana = createSprite(600,300,11,11111);
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.scale = 0.1;
    banana.y = Math.round(random(289,342))
    banana.lifetime = 300; 
    FoodGroup.add(banana);
    
     }
}

function spawnObstacles(){
  if(frameCount%300 === 0){
    obstacles = createSprite(600,530,20,200000000000)
    obstacles.addImage(obstaceImage);
    obstacles.velocityX = -3;
    obstacles.scale = 0.2;
    obstacles.lifetime = 300;
    obstacleGroup.add(obstacles);
     
     }
}













