var bg,bgImg;
var spiderMan, spiderManImg;
var man1,man2,man3,man4,man5,man6,man1Img,man2Img,man3Img,man4Img,man5Img,man6Img;
var spidermanShooterImg,spidermanShooter;
var zombiasGroup,zombia1Img,zombia2Img,zombia3Img,zombia4Img,zombia5Img;
var PLAY = 1;
var END = 0;
var gameState = PLAY ;
var spaceship,spaceShipImg;
var collect = 0;
var saved = 0;

function preload(){
  
  spiderManImg = loadImage("assets/spider.png");
  spidermanShooterImg = loadImage("assets/spidermanShooter2.png");

  bgImg = loadImage("assets/building.jpg");
  man1Img = loadImage("assets/man 1.png");
  man2Img = loadImage("assets/man 2.png");
  man3Img = loadImage("assets/man 3.png");
  man4Img = loadImage("assets/man 4.png");
  man5Img = loadImage("assets/man 5.png");
  man6Img = loadImage("assets/man 6.png");
  zombia1Img = loadImage("assets/zombia1.png");
  zombia2Img = loadImage("assets/zombia2.png");
  zombia3Img = loadImage("assets/zombia3.png");
  zombia4Img = loadImage("assets/zombia4.png");
  zombia5Img = loadImage("assets/zombia5.png");
  spaceShipImg = loadImage("assets/spaceShip.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 1.1
  

//creating the player sprite
  spiderMan = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  spiderMan.addImage(spiderManImg)
  spiderMan.scale = 0.3
  spiderMan.debug = true
  spiderMan.setCollider("rectangle",0,0,300,300)

  man1 = createSprite(displayWidth-900, displayHeight-300, 50, 50);
  man1.addImage(man1Img)
  man1.scale = 0.6
  man1.debug = true
 
  man1.setCollider("rectangle",0,0,300,300)

  man2 = createSprite(displayWidth-600, displayHeight-300, 50, 50);
  man2.addImage(man2Img)
  man2.scale = 0.6
  man2.debug = true;
 // man2.lifetime = 1500;
  man2.setCollider("rectangle",0,0,300,300)

  man3 = createSprite(displayWidth-400, displayHeight-300, 50, 50);
  man3.addImage(man3Img)
  man3.scale = 0.6
  man3.debug = true;
 // man3.lifetime = 1500;
  man3.setCollider("rectangle",0,0,300,300)

  man4  = createSprite(displayWidth-300, displayHeight-300, 50, 50);
  man4.addImage(man4Img)
  man4.scale = 0.6
  man4.debug = true;
 // man4.lifetime = 1500;
  man4.setCollider("rectangle",0,0,300,300)

  man5 = createSprite(displayWidth-200, displayHeight-300, 50, 50);
  man5.addImage(man5Img)
  man5.scale = 0.6
  man5.debug = true;
 // man5.lifetime = 1500;
  man5.setCollider("rectangle",0,0,300,300)

  man6 = createSprite(displayWidth-100, displayHeight-300, 50, 50);
  man6.addImage(man6Img)
  man6.scale = 0.4
  man6.debug = true;
 // man6.lifetime = 1500;
  man6.setCollider("rectangle",0,0,300,300)

  spaceship = createSprite(displayWidth-500, displayHeight-700, 50, 50);
  spaceship.addImage(spaceShipImg)
  spaceship.scale = 0.6
  spaceship.debug = true;
 // spaceShip.lifetime = 1500;
  spaceship.setCollider("rectangle",0,0,300,300)

 zombiasGroup = createGroup();

}


function draw() {
  background(0); 

  if(gameState === PLAY){

    // man1.lifetime = 20;
     //man2.lifetime = 20;
    //moving the player up and down and making the game mobile compatible using touches
    if(keyDown("UP_ARROW")||touches.length>0){
      spiderMan.y = spiderMan.y-30
    }
    
    if(keyDown("DOWN_ARROW")||touches.length>0){
      spiderMan.y = spiderMan.y+30
    }
    //moving the player left and right and making the game mobile compatible using touches
    if(keyDown("RIGHT_ARROW")||touches.length>0){
      spiderMan.x = spiderMan.x+30
    }
    
    if(keyDown("LEFT_ARROW")||touches.length>0){
      spiderMan.x = spiderMan.x-30

    }

     
    //release bullets and change the image of shooter to shooting position when space is pressed
    if(keyWentDown("space")){ 
      spiderMan.addImage(spidermanShooterImg); 
 
    }
    //player goes back to original standing image once we stop pressing the space bar
    else if(keyWentUp("space")){
      spiderMan.addImage(spiderManImg)
    }
    //=====================================================================================
    //Spiderman touching man

    if(spiderMan.isTouching(man1)){
      man1.x = spiderMan.x + 50;
      man1.y = spiderMan.y;
      collect += 1;
     }

     else if(spiderMan.isTouching(man2)){
      man2.x = spiderMan.x + 50;
      man2.y = spiderMan.y;
      collect += 1;
     }

     else if(spiderMan.isTouching(man3)){
      man3.x = spiderMan.x + 50;
      man3.y = spiderMan.y;

     }

      else if(spiderMan.isTouching(man4)){
      man4.x = spiderMan.x + 50;
      man4.y = spiderMan.y;
     }

     else if(spiderMan.isTouching(man5)){
      man5.x = spiderMan.x + 50;
      man5.y = spiderMan.y;
     }

     else if(spiderMan.isTouching(man6)){
      man6.x = spiderMan.x + 50;
      man6.y = spiderMan.y;
     }

     //==============================================================================================
    //Man touching the space ship
    
    if(man1.isTouching(spaceship)){
      saved += 1;
      man1.remove();
    }    
    else if(man2.isTouching(spaceship)){
      saved += 1;
      man2.remove();
    }
    else if(man3.isTouching(spaceship)){
      saved += 1;
      man3.remove();
    }
    else if(man4.isTouching(spaceship)){
      saved += 1;
      man4.remove();
    }
    else if(man5.isTouching(spaceship)){
      saved += 1;
      man5.remove();
    }
    else if(man6.isTouching(spaceship)){
      saved += 1;
      man6.remove();
    }
    
    //=======================================================================================
     //Zombie touching the man
     if(zombiasGroup.isTouching(man1)){
     man1.addImage(zombia1Img)
     man1.lifetime = 1;

     man1 = createSprite(displayWidth-900, displayHeight-300, 50, 50);
     man1.addImage(man1Img);
     man1.scale = 0.6;
     man1.debug = true;    
     man1.setCollider("rectangle",0,0,300,300);
     //man1.setLifetimeEach(-1);
    }
    
    else if(zombiasGroup.isTouching(man2)){
      man2.addImage(zombia1Img);
      man2.lifetime = 1;
      
     man2 = createSprite(displayWidth-100, displayHeight-300, 50, 50);
     man2.addImage(man2Img);
     man2.scale = 0.6;
     man2.debug = true;    
     man2.setCollider("rectangle",0,0,300,300);
     // man2.setLifetimeEach(-1);
    }

    else if(zombiasGroup.isTouching(man3)){
      man3.addImage(zombia1Img)
      man3.lifetime = 1;
    
     man3 = createSprite(displayWidth-500, displayHeight-300, 50, 50);
     man3.addImage(man3Img);
     man3.scale = 0.6;
     man3.debug = true;    
     man3.setCollider("rectangle",0,0,300,300);
      //man3.setLifetimeEach(-1);
     }

     else if(zombiasGroup.isTouching(man4)){
      man4.addImage(zombia1Img)
      man4.lifetime = 1;

     man4 = createSprite(displayWidth-300, displayHeight-300, 50, 50);
     man4.addImage(man4Img);
     man4.scale = 0.6;
     man4.debug = true;    
     man4.setCollider("rectangle",0,0,300,300);
      //man4.setLifetimeEach(-1);
     }

     else if(zombiasGroup.isTouching(man5)){
      man5.addImage(zombia1Img)
      man5.lifetime = 1;

     man5 = createSprite(displayWidth-600, displayHeight-300, 50, 50);
     man5.addImage(man5Img);
     man5.scale = 0.6;
     man5.debug = true;    
     man5.setCollider("rectangle",0,0,300,300);
      //man5.setLifetimeEach(-1);
     }

     else if(zombiasGroup.isTouching(man6)){
      man6.addImage(zombia1Img)
      man6.lifetime = 1;

     man6 = createSprite(displayWidth-400, displayHeight-300, 50, 50);
     man6.addImage(man6Img);
     man6.scale = 0.6;
     man6.debug = true;    
     man6.setCollider("rectangle",0,0,300,300);
      //man6.setLifetimeEach(-1);
     }

    else if(zombiasGroup.isTouching(spiderMan)){
      gameState = END;
    }
    

     //spawn zombia on the ground
    spawnZombia();

  }
  else if(gameState === END){

    //set lifetime of the game objects so that they are never destroyed
    zombiasGroup.setLifetimeEach(-1);

    textSize(30);
    text("Game Over")

  }

    drawSprites();

}  

function spawnZombia(){
  if (frameCount % 100 === 0){
    var zombia = createSprite(Math.round(random(50,windowWidth -50)),Math.round(random(50,windowHeight -50)),10,40);
    zombia.velocityX = Math.round(random(-2,2))
    
     //generate random obstacles
     var rand = Math.round(random(1,5));
     switch(rand) {
       case 1: zombia.addImage(zombia1Img);
               zombia.scale = 0.4;
               break;
       case 2:zombia.addImage(zombia2Img);
               zombia.scale = 0.5;
               break;
       case 3: zombia.addImage(zombia3Img);
               zombia.scale = 0.5;
               break;
       case 4: zombia.addImage(zombia4Img);
               zombia.scale = 0.4;
               break;
       case 5: zombia.addImage(zombia5Img);
               zombia.scale = 0.1;
               break;
       default: break;
     }
    
     //assign lifetime to the zombia           
    
     zombia.lifetime = 300;
    
    //add each zombia to the group
    zombiasGroup.add(zombia);
  }
 }