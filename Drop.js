class Drop{

    constructor(x , y ){

        this.body = Bodies.circle( x , y , 5);
        World.add(world , this.body);

        this.image = loadImage("images/Rain_Drop.png");

    }

    display(){

        imageMode(CENTER);
        image(this.image , this.body.position.x , this.body.position.y , 12 , 12);
    
    }

    update(){

        if(this.body.position.y >= 500){

            Matter.Body.setPosition(this.body , {x:random(0 , 400) , y:random(0 , 400)})

        }

    }

}