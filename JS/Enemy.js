class Enemy {
  constructor(space, img, width,height) {
    this.space = space;
    this.x = Math.floor(Math.random() * 600);
    this.y = 0;
    this.width = width;
    this.height = height;
      this.img = img;
      this.imgB = new Image();
      this.imgY = new Image();
  
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

  drawEnemyB() {
    this.imgB.src = "/docs/assets/imgs/fighter.png";
    this.space.ctx.drawImage(
      this.imgB,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  drawEnemyY() {
    this.imgY.src = "/docs/assets/imgs/new fighter yellow.png";
    this.space.ctx.drawImage(
      this.imgY,
      this.x,
      this.y,
      this.width,
      this.height);
  }
}
//this.width = 100;
//this.height = 60;