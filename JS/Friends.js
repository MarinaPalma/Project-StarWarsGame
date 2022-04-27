class Friends {
  constructor(space, droid,width, height) {
    this.space = space;
    this.x = Math.floor(Math.random() * 580);
    this.y = 0;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.droid = droid;
    this.collided = false;
  }

  borderLeft() {
    return this.x;
  }
  borderRight() {
    return this.x + this.width;
  }

  borderTop() {
    return this.y;
  }

  borderBottom() {
    return this.y + this.height;
  }


  drawFriend() {
    if (this.droid === "Grogu") {
      this.img.src = "docs/assets/imgs/Grogu.png";
    } else if (this.droid === "Bo") {
      this.img.src = "docs/assets/imgs/d0.png";
    }
    this.space.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

}



