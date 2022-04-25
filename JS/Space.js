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
    this.enemies = [];
    this.frames = 0;
    this.friends = [];
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

  stop() {
    clearInterval(this.intervalId);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.frames++;
    this.drawBackground();
    this.player.drawPlayer();
    this.createEnemies();
    this.enemies.forEach((enemy) => {
      enemy.y++;
      enemy.drawEnemy();
    });
  }

  createEnemies() {
    if (this.frames % 200 === 0) {
      this.enemies.push(new Enemy(this));
    }
  }
}
