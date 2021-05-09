class Particle {
    constructor(x,y,radius){
        var options ={
            'restitution': 1,
            'friction': 0,
            'density':0.8,
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.color=color(random(0,255),random(0,255),random(0,255));
        this.x = x;
        this.y = y
        this.r = radius
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        fill(this.color);
        ellipse(0,0,this.r, this.r)
        pop();
    }
}