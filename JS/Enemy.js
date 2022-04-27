class Enemy {
  constructor(space, ship, width, height) {
    this.space = space;
    this.x = Math.floor(Math.random() * 600);
    this.y = 0;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.ship = ship;
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

  drawEnemy() {
    if (this.ship === "fighter") {
      this.img.src = "/docs/assets/imgs/fighter.png";
    } else {
      this.img.src = "/docs/assets/imgs/new fighter yellow.png";
    }
    this.space.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
