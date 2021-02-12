class Paper{
    constructor(){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 1.2,
            density : 1.2,
        }

        this.body = Matter.Bodies.circle(100,650,20);
        World.add(world,this.body);
    }


        
    }
