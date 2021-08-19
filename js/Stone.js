class Stone{
    constructor(x,y,radius){
        var options={
        isStatic:false,
       restituction:0.8,
       
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("red");
        push();
        
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,80,80);
        fill("red");
       
        pop();
        
    }
}