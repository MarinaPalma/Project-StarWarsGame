class Friends {
  constructor(space) {
    this.space = space;
    this.x = Math.floor(Math.random() * 480);
    this.y = 0;
    this.width = 60;
    this.height = 50;
    this.imgFr = new Image();
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
    this.imgFr.src = "/docs/assets/imgs/Grogu.png";
    this.space.ctx.drawImage(
      this.imgFr,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
