//create bird class 
class Bird {
    //create the constructor
    constructor(x, y) {
     //create options
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      //create the body
      this.body = Bodies.rectangle(x, y,50,50, options);
      this.width = 50;
      this.height = 50;
      //add the body to the world
      World.add(world, this.body);
    }
    display(){
      //name space position and angle 
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle =this.body.angle;
      push();
      translate(pos.x,pos.y);
      //rotate the object at an angle
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill(255);
      //draw the object
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  