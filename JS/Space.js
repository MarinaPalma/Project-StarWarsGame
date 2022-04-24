class Space {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.backGround = new Image();
    this.x = 0;
    this.y = 0;
    this.width = 600;
    this.height = 600;
    this.player = null;
    this.intervalId = null;
    this.controls = null;
  }

  drawBackground() {
    this.backGround.src = "/docs/assets/imgs/backGround2.jpg";
    this.ctx.drawImage(
      this.backGround,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  start() {
    this.player = new Player(this);
    this.controls = new Controls(this);
    this.controls.keyboardEvents();
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawBackground();
    this.player.drawPlayer();
  }
}
