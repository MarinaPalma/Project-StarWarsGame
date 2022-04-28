class Player {
  constructor(space) {
    this.space = space;
    this.x = 275;
    this.y = 495;
    this.width = 50;
    this.height = 90;
    this.imgBB = new Image();
    this.lifes = 3;
    this.score = 0;
    this.img = "./docs/assets/imgs/bb8 front.png";

    this.friendsCatched=[];
    
    this.collided =false;
    
  }

  drawPlayer() {

    this.imgBB.src = this.img;
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
      this.borderBottom() > object.borderTop() &&
      this.borderTop() < object.borderBottom() &&
      this.borderRight() > object.borderLeft() &&
      this.borderLeft() < object.borderRight()
    );
  }

  changeImg() {
    if(this.img === "./docs/assets/imgs/bb8 front.png"){
      this.img = "./docs/assets/imgs/bb8 back.png";  
    }else{
      this.img = "./docs/assets/imgs/bb8 front.png"
    }
  }


}
