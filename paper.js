class Paper{
    constructor(){
     var options = {
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2
     }
     this.body = Bodies.rectangle(100,200,50,50,options);
     this.width = 50;
     this.height = 50;
     

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);   
        pop()
        
    
    }
}