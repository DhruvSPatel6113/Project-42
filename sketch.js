const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var thunder1 , thunder2 , thunder3 , thunder4 , thunder;
var drops = [];
var maxDrops = 100;
var bruce;

function preload(){

    thunder1 = loadImage("images/1.png");
    thunder2 = loadImage("images/2.png");
    thunder3 = loadImage("images/3.png");
    thunder4 = loadImage("images/4.png");

}

function setup(){
    createCanvas(300 , 500);

    engine = Engine.create();
    world = engine.world;

    bruce = new Umbrella(150 , 370);

    for(var i=0; i<maxDrops; i++){

        drops.push(new Drop(random(0 , 300) , random(0 , 400)));

    }

    Engine.run(engine);
   
}

function draw(){
    background(0);

    Engine.update(engine);

    imageMode(CENTER);

    bruce.display();

    for(var i=0; i<maxDrops; i++){

        drops[i].display();
        drops[i].update();

    }

    if(frameCount%50 === 0){

        thunder = createSprite(random(0 , 300) , random(0 , 50) , 10 , 10);

        var rand = Math.round(random(1 , 4));

        switch(rand){

            case 1 : thunder.addImage(thunder1);
                     break;
            case 2 : thunder.addImage(thunder2);
                     break;
            case 3 : thunder.addImage(thunder3);
                     break;
            case 4 : thunder.addImage(thunder4);
                     break;
            default : break;

        }

        thunder.lifetime = 12;
        thunder.scale  = 0.5;

    }

    drawSprites();

}