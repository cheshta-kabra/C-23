class Box {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.y=y;
      this.x=x;
      
      World.add(world, this.body);
    }
    display(){
      //console.log(this.body)
      
      rectMode(CENTER);
      strokeWeight(6);
      stroke("red")
      fill("navy")
      rect(this.x,this.y, this.width, this.height);
    }
  };
  