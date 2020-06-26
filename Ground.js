class Ground{

    constructor(){
        var option={
            isStatic: true
        }
this.body= Bodies.rectangle(400,680,800,20,option);
this.width=800;
this.height=20;
World.add (world,this.body);
}

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}