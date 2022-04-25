class Enemy {
  constructor(space) {
    this.space = space;
    this.x = Math.floor(Math.random() * 500);
    this.y = 0;
    this.width = 100;
    this.height = 60;
    this.imgEn = new Image();
  }

  enemyBorderLeft() {
    return this.x;
  }
  enemyBorderRight() {
    return this.x + this.width;
  }

  enemyBorderTop() {
    return this.y;
  }

  enemyBorderBottom() {
    return this.y + this.height;
  }

drawEnemy(){
    this.imgEn.src = "/docs/assets/imgs/fighter.png";
    this.space.ctx.drawImage(this.imgEn, this.x, this.y, this.width, this.height);
}
}
