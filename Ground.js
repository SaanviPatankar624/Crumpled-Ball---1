class Ground{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(400, 400, 800, 10, options);
        this.width = width;
        this.height = height;
    
        World.add(world, this.body)
    }
    display(){
        fill("red");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

    }
};