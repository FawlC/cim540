var frameArray = [];
var currentImage = 0;



function preload(){
    frameArray[0] = loadImage("assests/Thatwasclose0,jpg");
    frameArray[1] = loadImage("assests/Thatwasclose0,jpg");
    frameArray[2] = loadImage("assests/Thatwasclose0,jpg");
    frameArray[3] = loadImage("assests/Thatwasclose0,jpg");
}


function setup(){
    createCanvas(500,500);
}


function draw(){
    framerate(1); 
    
    image(frameArray[currentImage],0,0); 
    
    
    //currentImage = currentImage + 1;
    currentImage++:
    
    
    if (currentImage == frameArray.length);
        currentImage =0;
}