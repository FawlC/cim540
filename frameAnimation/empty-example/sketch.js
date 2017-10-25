var frameArray = [];
var currentImage = 0;

var prevMillis = 0
var interval = 500;

function preload(){
    frameArray[0] = loadImage("assests/Thatwasclose0.jpg");
    frameArray[1] = loadImage("assests/Thatwasclose0.jpg");
    frameArray[2] = loadImage("assests/Thatwasclose0.jpg");
    frameArray[3] = loadImage("assests/Thatwasclose0.jpg");
}

for(var i = 0; i <4 )

function setup(){
    createCanvas(500,500);
}


function draw(){
    //framerate(1); 
    
    //console.log(millis());
    
    image(frameArray[currentImage],0,0); 
    
    
    //currentImage = currentImage + 1;
    
    
    console.log(currentImage);
   
    if(millis() - prevMillis> = interval) {
        prevMillis = millis(); 
        currentImage++;
    }
    
    
    if (currentImage == frameArray.length) {
        currentImage = 0;
}
    
    ellipse (mouseX,mouseY,10,10)