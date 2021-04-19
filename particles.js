class Particles{
    constructor(x,y,radius){
        var options = {
            restitution: 0.9,
            friction: 0.8,
            density:0.1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=radius
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body)
    }

    display(){
        var angle = this.body.angle
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        fill(this.color)
        ellipse(0,0,this.radius,this.radius);
        pop()
    }

}