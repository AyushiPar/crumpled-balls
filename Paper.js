class Paper{
    constructor(){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
        }

        this.body = Matter.Bodies.circle(100,550,20,options);
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push() ;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0, 20,20);
        pop();
    }

        
    }
