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
    strokeWeight(0)
    //Face
    fill("yellow");
    ellipse(posX, posY, fSize, fSize);
    
    //mouth
    fill("black");
    ellipse(posX + 30, posY + 50, 60, 40);
    
    //eyes
    fill(255);
    ellipse(posX - 50, posY - 20, 20,40);
    ellipse(posX + 50, posY - 20, 20,40);
    
    //pupils
    fill(0);
    ellipse(posX - 50, posY - 10, 20, 20);
    ellipse(posX + 50, posY - 10, 20, 20);
    
    //mouthline
    stroke(125, 0, 0);
    strokeWeight(3);
    

    //nose
    fill("orange");
    ellipse(posX - 0, posY + 10, 7,7);
    strokeWeight(1);
    
}