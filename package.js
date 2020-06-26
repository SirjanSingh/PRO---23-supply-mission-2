class Package{
    constructor(x, y, width, height) {

        this.body = Bodies.rectangle(x, y, width, height, {'restitution':0.8,'friction':0.3,'density':1.0,isStatic:true});
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(200,156,39);
        rect(0,0, this.width, this.height);
        pop();
      }
    }
    