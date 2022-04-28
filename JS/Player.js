class Player {
  constructor(space) {
    this.space = space;
    this.x = 275;
    this.y = 495;
    this.width = 50;
    this.height = 90;

    this.imgBB = new Image();
    const img = new Image();
    img.addEventListener("load", () => {
      this.imgBB = img;
    });
    img.src = "./docs/assets/imgs/bb8_front.png";
    this.lifes = 3;
    this.score = 0;

    this.friendsCatched = [];

    this.collided = false;
    this.src = "./docs/assets/imgs/bb8_front.png";
  }

  drawPlayer() {
    this.imgBB.src = this.src;
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
    if (this.src === "./docs/assets/imgs/bb8_front.png") {
      this.src = "./docs/assets/imgs/bb8_back.png";
    } else {
      this.src = "./docs/assets/imgs/bb8_front.png";
    }
  }
}
