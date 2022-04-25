class Enemy {
  constructor(space) {
    this.space = space;
    this.x = Math.floor(Math.random() * 500);
    this.y = 0;
    this.width = 100;
    this.height = 60;
    this.imgEn = new Image();
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
    this.imgEn.src = "/docs/assets/imgs/fighter.png";
    this.space.ctx.drawImage(
      this.imgEn,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
