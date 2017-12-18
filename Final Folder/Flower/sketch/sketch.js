var acceleration = 0.0200;
var nDrops = 500;
var drops = [];
var changeBColor;
var stem1;
var stem2;
var flower;
var draw = true;

function setup() {
  createCanvas(640, 480);
  for (i = 0; i < nDrops; i++) 
    drops.push(new Drop());
  
rain = createButton('Rain');
rain.position(0, 400);
rain.mousePressed(drops);
}

function draw() {
  clear();
  drops.forEach(function(d) {
    d.drawAndDrop();
  });
   
//    strokeWeight(1);
//    //leaf1
//    fill("green");
//    ellipse(300,350,50,24);
//    //stem1
//    strokeWeight(1);
//    fill("green");
//    rect(265, 315, 14, 62);  
   
    //leaf2
//    fill("green");
//    ellipse(245,288,50,24);
//    //stem2
//    strokeWeight(1);
//    fill("green");
//    rect(265, 240, 14, 75);
    
    //POT
    strokeWeight(2);
    fill("brown");
    rect(200, 400, 145, 90);
    rect(180, 375, 180, 50);
    
    //OPEN FLOWER
    //Top
//    strokeWeight(1);
//    fill("pink");
//    ellipse(272, 135, 80, 80);
//    //Middle R
//    ellipse(327, 170, 80, 80);
//    //Middle L
//    ellipse(219, 170, 80, 80);
//    //bottom R
//    ellipse(311, 228, 80, 80);
//     //bottom L
//    ellipse(233, 229, 80, 80);
//    //center
//    strokeWeight(1);
//    fill("orange");
//    ellipse(272, 190, 50, 50);
}

function Drop() {
    this.initX = function() {
    this.x = random() * width;
  };
  this.initY = function() {
    this.y = -random() * height / 3; // Initialise rain somewhat off the screen
  };

  this.initX();
  this.y = random() * height;

  this.length = random() * 10;
  this.speed = random();

  this.drawAndDrop = function() {
    this.draw();
    this.drop();
      drawAndDrop = true
  };

  this.draw = function() {
    line(this.x, this.y, this.x, this.y + this.length);
  };
    
  this.drop = function() {
    if (this.y < height) {
      this.y += this.speed;
      this.speed += acceleration;
    } else {
      this.speed = random();
      this.initY();
      this.initX();
    }
  };
}

function Grow(){
    if (drop.y > rect (265, 315))
     display = stem1(rect(265, 315, 14, 62)) ;
     strokeWeight(1);
    //leaf1
    fill("green");
    ellipse(300,350,50,24);
    stem1();
    strokeWeight(1);
    fill("green");
//    rect(265, 315, 14, 62); 
    
    if stem1(265, 315);
    display = stem2(rect(265, 240, 14, 75));
    fill("green");
    ellipse(245,288,50,24);
    strokeWeight(1);
    fill("green");
//    rect(265, 240, 14, 75);
    
    if stem2(265, 240);
    display = flower;
    flower = {(strokeWeight(1)
    fill("pink");
    ellipse(272, 135, 80, 80);
    //Middle R
    ellipse(327, 170, 80, 80);
    //Middle L
    ellipse(219, 170, 80, 80);
    //bottom R
    ellipse(311, 228, 80, 80);
     //bottom L
    ellipse(233, 229, 80, 80);
    //center
    strokeWeight(1);
    fill("orange");
    ellipse(272, 190, 50, 50);)};
}