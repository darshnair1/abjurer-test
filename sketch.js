var gameState = "startUp";
var backImg, abjurerTitleImg, beginButtonImg, howToPlayImg, beginButton;
var castleImg, mouseSwordImg, castle;
var viking_run, viking_attack, viking_hit;
var skeleton_run, skeleton_hit, skeleton_attack; 
var imp_run, imp_hit, imp_attack;
var gameMusic;
var rubberduck1, rubberduck2, rubberduckAni, rubberducky;

function preload() {
  backImg = loadImage("Images/Background.png");
  abjurerTitleImg = loadImage("Images/abjurerTitleImg.png");
  beginButtonImg = loadImage("Images/beginButtonImg.png");
  howToPlayImg = loadImage("Images/howToPlayImg.png");
  castleImg = loadImage("Castle.png");
  // skeleton_run = loadAnimation("run_1.png, run_2.png, run_3.png, run_4.png, run_5.png, run_6.png");
  // skeleton_attack = loadAnimation("attack1_1.png, attack1_2.png, attack1_3.png, attack1_4.png, attack1_5.png, attack1_6.png");
  // skeleton_hit = loadAnimation("hit_1.png, hit_2.png, hit_3.png");
  // gameMusic = loadSound("gameMusic.mp3");
  rubberduckAni = loadAnimation("rubberduck.jpg", "rubberduck2.jpg");
}

function setup() {
  createCanvas(1600,800);
  beginButton = createSprite(800, 600, 153, 69);
  abjurerTitleImg.scale = 12;
}

function draw() {

  background(backImg);  

  if(gameState === "startUp"){
    imageMode(CENTER);
    image(howToPlayImg, 800, 150);
    image(abjurerTitleImg, 800, 400, 422, 129);
    
    beginButton.addImage(beginButtonImg);
    // castle.visible = false;
    if(mousePressedOver(beginButton)){
      gameState = "gamePlaying";
      console.log("is working!!!!!!!!");
      console.log(gameState);
    }
  }

  if(gameState === "gamePlaying") {
    // gameMusic.play = true;

    castle = createSprite(800, 400, 200, 200);
    castle.scale = 0.75
    castle.addImage(castleImg);

    rubberducky = createSprite(200, 200, 50, 50);
    rubberducky.addAnimation("rubberduck", rubberduckAni);

    howToPlayImg.visible = false;
    abjurerTitleImg.visible = false;
    beginButton.visible = false;
  }
  
  drawSprites();

}