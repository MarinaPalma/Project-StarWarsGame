class Player {
  constructor(space) {
    this.space = space;
    this.x = 275;
    this.y = 495;
    this.width = 60;
    this.height = 100;
    this.imgBB = new Image();
    this.lifes = 3;
    
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

  crashed(enemy) {
    return (
      this.borderBottom() > enemy.borderTop() &&
      this.borderTop() < enemy.borderBottom() &&
      this.borderRight() > enemy.borderLeft() &&
      this.borderLeft() < enemy.borderRight()
    );
  }

  catch(friend){
    return(
      this.borderBottom() > friend.borderTop() &&
      this.borderTop() < friend.borderBottom() &&
      this.borderRight() > friend.borderLeft() &&
      this.borderLeft() < friend.borderRight()
    );
  }


}
