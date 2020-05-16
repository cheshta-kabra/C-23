class Circle {
    constructor(x, y, radius) {
      var options = {
        'isStatic':true
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = radius;
      this.x=x;
      this.y=y;
      
      World.add(world, this.body);
    }
    display(){
      //console.log(this.body)
      ellipseMode(CENTER);
      strokeWeight(5);
      stroke("blue")
      fill("green");
      ellipse(this.x, this.y, this.width,this.width);
    }
  };
  