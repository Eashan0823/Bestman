class Drop{
    constructor(x,y){
        var options = {
            friction:0.1,  
            restitution:0.1,
        }
    
    this.rain = Bodies.circle(x,y,5,options);
    //Radius of the drops
    this.radius=5;
    //Adding this.rain to the game
    World.add(world,this.rain);
    }
    update(){
        if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
        }
    }
    display(){
        fill("blue");
        //to center the shape
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}