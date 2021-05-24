var cat, cat1, cat11, cat22, cat33;
var mouse, mouse1, mouse11, mouse22, mnouse33;
var ground, ground1;

function preload() {
    //load the images here
    cat11 = loadImage("images/cat1.png")
    cat22 = loadAnimation("images/cat2.png","images/cat3.png")
    cat33 = loadImage("images/cat4.png")

    mouse11 = loadImage("images/mouse1.png")
    mouse22 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse33 = loadImage("images/mouse4.png")

    ground = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    ground1 = createSprite(500,400,1000,800);
    ground1.addImage(ground);

    cat1 = createSprite(900,670,10,10);
    cat1.addImage("catSitting",cat11);
    cat1.scale = 0.1

    mouse1 = createSprite(200,650,10,10);
    mouse1.addImage("mouseEating",mouse11);
    mouse1.scale = 0.1;

}

function draw() {

    background(255);

    //Write condition here to evalute if tom and jerry collide
   
    
    if(keyWentDown(LEFT_ARROW)) {
        mouse1.addAnimation("ratTease",mouse22);
        mouse1.changeAnimation("ratTease");
        mouse1.frameDelay = 25;

        cat1.addAnimation("catWalking",cat22);
        cat1.changeAnimation("catWalking");
        cat1.visible = true;
        cat1.velocityX = -5;
      }
    else if(cat1.x - mouse1.x < 80) {
        mouse1.addAnimation("ratStanding",mouse33)
        mouse1.changeAnimation
        mouse1.velocityX = 0;
        mouse1.velocityY = 0;
        mouse1.X = 210;

        last();

        cat1.addImage("catStanding",cat33)
        cat1.velocityX = 0;
        cat1.velocityY = 0;
      }
    drawSprites();
}


function last() {

  //For moving and changing animation write code here
  mouse1.addAnimation("ratTease",mouse33);
  mouse1.changeAnimation("ratTease");

  cat1.addAnimation("catWalking",cat33);
  cat1.changeAnimation("catWalking");
  cat1.visible = true;
  cat1.velocityX = 0;
  cat1.x = 300;
}
