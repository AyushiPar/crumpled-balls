class Ground{
    constructor(){
        var options = {
            isStatic : true
        }

        this.body =Bodies.rectangle(width/2, 670, width, 30);
        World.add(world, this.body);
    }
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height)
}
}