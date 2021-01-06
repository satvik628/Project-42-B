const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var man;
var thunder;
var drops=[];
var maxDrops=100;
var b1,b2,b3,b4;

var thunderCreatedFrame=0;


function preload(){
 
    b1 = loadImage("images/thunderbolt/1.png");
    b2 = loadImage("images/thunderbolt/2.png");
    b3 = loadImage("images/thunderbolt/3.png");
    b4 = loadImage("images/thunderbolt/4.png");
  



}

function setup(){
    createCanvas(500,750) ;
    engine = Engine.create();
    world = engine.world;


man=new Umbrella(200,550);

for(var i=0; i<maxDrops; i++){
    drops.push(new drop(random(0,400), random(0,400),3));
}
   
    
}

function draw(){

    Engine.update(engine);

background("BLACK");

rand = Math.round(random(1,4));
if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder = createSprite(random(10,370), random(10,30), 10, 10);
    switch(rand){
        case 1: thunder.addImage(b1);
        break;
        case 2: thunder.addImage(b2);
        break; 
        case 3: thunder.addImage(b3);
        break;
        case 4: thunder.addImage(b4);
        break;
        default: break;
    }
    thunder.scale = random(0.3,0.6)
}

if(thunderCreatedFrame + 10 ===frameCount && thunder){
    thunder.destroy();
}



man.display();
for(var i = 0; i<maxDrops; i++){
    drops[i].display();
    drops[i].update();
    
    
}

drawSprites();
    
}   

