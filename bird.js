function Bird() {
  this.y = height/2;
  this.x = 85;

// how the plane goes up and down 
  this.gravity = 0.6;
  this.lift = -6;
  this.velocity = 0;

  this.show = function() {
    fill(228, 140, 221);
    rect(this.x, this.y);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

}