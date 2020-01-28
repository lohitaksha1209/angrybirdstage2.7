//create log class 
class Log {
    //create the constructor
    constructor(x, y, height,angle) {
     //create options
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      //create the body
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      //add the body to the world
      World.add(world, this.body);
    }
    display(){
      //name space position and angle 
      var pos =this.body.position;
      var angle =this.body.angle;
      push();
      translate(pos.x,pos.y);
      //rotate the object at an angle
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill(255);
      //draw the object
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  