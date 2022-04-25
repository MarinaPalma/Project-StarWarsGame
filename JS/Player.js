class Player {
  constructor(space) {
    this.space = space;
    this.x = 275;
    this.y = 495;
    this.width = 60;
    this.height = 100;
    this.imgBB = new Image();
    this.lifes = 3;
    this.score = 0;
    
    this.collided =false;
    
  }

  drawPlayer() {
    this.imgBB.src = "/docs/assets/imgs/bb8 front.png";
    this.space.ctx.drawImage(
      this.imgBB,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  moveLeft() {
    this.x -= 10;
  }

  moveRight() {
    this.x += 10;
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

  crashed(object) {
    return (
      
      (this.borderTop()+10) < (object.borderBottom()-5) &&
      (this.borderRight()-10) > (object.borderLeft()+5) &&
      (this.borderLeft()+10) < (object.borderRight()-5)
    );
  }

  


}
