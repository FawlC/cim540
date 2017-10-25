var bgColor = "pink";
var fSize = 200;

var posX = 0;
var posY = 0; 

var posX = width/2;
var posY = height/2;

function setup(){
   createCanvas(1000,500);
    
    background(125);
    background(255,0,0);
    background("#333333");
    background("cyan");
    
    background(bgColor);
    
    posX = width/2;
    posY = 100;
}

function draw(){
    //stick
    fill("brown");
    rect(posX - 0, posY + 170, 50 , 150);
    
    
    strokeWeight(0);
    //Body
    fill("yellow");
    strokeWeight(3);
    rect(posX - 80, posY - 20, 200, 205);
    
    
    //mouth
    fill("black");
    ellipse(posX + 20, posY + 130, 70, 50);
    
    //eyes
    fill(255);
    ellipse(posX - 20, posY + 50, 40,40);
    ellipse(posX + 60, posY + 50, 40,40);
    
    //pupils
    fill(0);
    var noseWiggle = map(mouseX, 0, width, -30, 50);
    ellipse(posX - 30, posY + 50, 20, 20);
    ellipse(posX + 50, posY + 50, 20, 20);
     rectMode(CENTER);
        rect(centerX, centerY + 30, 50, 15, 5);
        rect(centerX, centerY + 30, 50, 1, 1);
    
      
   
    
