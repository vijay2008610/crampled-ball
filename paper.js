class Paper {

    constructor(x,y,radius){
    
     var options = {
    isStatic:false,
    friction:0.3,
    restitution:0.2,
    density:1.0
    }
    this.radius = radius
    this.body = Bodies.circl(x,y,radius,options);
    this.diametre=diametre;
    World.add(world,this.body);
    }
    
    display(){
   fill ("yellow");
   ellipseMode(RADIUS) ;
   ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
    }