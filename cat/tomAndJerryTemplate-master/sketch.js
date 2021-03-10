 var  backgroundImage;
 var cat,catImage;
 var mouse,mouseImage;
function preload() {
    //load the images here
    backgroundImage=loadImage("images/garden.png");
    catImage=loadImage("images/cat1.png");
    mouseImage=loadImage("images/mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(800,700,10,20);
cat.addImage(catImage);
cat.scale=0.1;

mouse=createSprite(400,700,10,20);
mouse.addImage(mouseImage);
mouse.scale=0.1;
}

function draw() {

    background(backgroundImage);
//     //Write condition here to evalute if tom and jerry collide
if(cat.X-mouse.X<(cat.width-mouse.width)/2){

    cat.changeAnimation("cat4.png")
    mouse.changeAnimation("mouse4.png");
    cat.velocity.X=0;
    
}
    drawSprites();
}


function keyPressed(){

//   //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-2;
    cat.addAnimation("catRunning",cat2.png);
    cat.cahneAnimation("catRunning");
}

 
}