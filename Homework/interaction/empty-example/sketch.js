var centerX = 0;
var centerY = 0;

var bgChange, bgChange1, hitImage;

var bgImage, bgImage2, currentBgImage;

var hitZoneX = 100;
var hitZoneY = 100;

var changeColor = false;

var randomColor = [255, 255, 255];

var showHide = true;

var showHideButton;


function preload() {
    bgImage = loadImage("assets/IceCreamTruck.jpg");
    bgImage2 = loadImage("assets/Jubilee-Park.jpg");
    hitImage = loadImage("assets/ballons.png");
}

function setup() {
    createCanvas(500, 500);
    centerX = width / 2;
    centerY = height / 2;

    bgChange = createButton('Park');
    bgChange.position(10, 500);
    bgChange.mousePressed(bgFunction);

    bgChange1 = createButton('Truck');
    bgChange1.position(100, 500);
    bgChange1.mousePressed(bgFunction1);

    showHideButton = createButton('show hide');
    showHideButton.position(200, 500);
    showHideButton.mousePressed(showHideFunction);

    currentBgImage = bgImage;
}

function draw() {
    image(currentBgImage, 0, 0);

    if (changeColor == true) {
        randomColor[0] = random(256);
        randomColor[1] = random(256);
        randomColor[2] = random(256);

    }

    if (showHide == true) {
        fill(randomColor[0], randomColor[1], randomColor[2])
}

   if (showHide == true) {
        fill(randomColor[0], randomColor[1], randomColor[2]);
       
    //stick
    fill("brown");
    rect(posX - 0, posY + 170, 50 , 150);
    
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
    ellipse(posX - 30, posY + 50, 20, 20);
    ellipse(posX + 50, posY + 50, 20, 20);  
}
        
    strokeWeight(1);

    ellipse(hitZoneX, hitZoneY, 10, 10);
    var hitZoneDist = dist(mouseX, mouseY, hitZoneX, hitZoneY);

    //console.log(hitZoneDist);

    if (hitZoneDist < 10) {
        image(hitImage, hitZoneX - 100, hitZoneY - 100);

    }

    ellipse(325, 325, 10, 10);
    if (mouseX > 300 && mouseX < 350 && mouseY > 300 && mouseY < 350) {
        changeColor = true;
    } else {
        changeColor = false;
    }

}

function bgFunction() {
    currentBgImage = bgImage;
}

function bgFunction1() {
    currentBgImage = bgImage2;
}

function showHideFunction() {
    if (showHide == true) {
        showHide = false;
    } else {
        showHide = true;
    }
}
      
    