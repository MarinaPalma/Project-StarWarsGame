class Player {
  constructor(space) {
    this.space = space;
    this.x = 275;
    this.y = 495;
    this.width = 60;
    this.height = 100;
    this.imgBB = new Image();
    this.life = 3;
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


  crash(enemy){
    return ( 
    this.bottom() > enemy.top() &&
    this.top() < enemy.bottom() &&
    this.right() > enemy.left() &&
    this.left() < enemy.right()
    );
  }
}
