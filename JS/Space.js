class Space {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.backGround = new Image();
    this.x = 0;
    this.y = 0;
    this.width = 700;
    this.height = 600;
    this.player = null;
    this.intervalId = null;
    this.controls = null;
    this.enemiesY = [];
    this.enemiesB = [];
    this.frames = 0;
    this.friends = [];
    this.isActive = false;

    this.winBg = new Image();
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
    this.active = true;
    this.player = new Player(this);
    this.controls = new Controls(this);
    this.controls.keyboardEvents();
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);
  }

  stop() {
    this.active = false;
    this.ctx.fillStyle = "yellow";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.font = "30px Star Jedi";
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "red";
    this.ctx.fillText(
      "game over",
      this.canvas.width / 2,
      this.canvas.height / 2
    );
    clearInterval(this.intervalId);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.frames++;
    this.drawBackground();
    this.player.drawPlayer();
    this.createEnemiesB();
    this.enemiesB.forEach((enemy) => {
      enemy.y++;
      if (!enemy.collided) {
        enemy.drawEnemyB();
      }
    });

    this.createEnemiesY();
    this.enemiesY.forEach((enemy) => {
      enemy.y += 2;
      if (!enemy.collided) {
        enemy.drawEnemyY();
      }
    });

    this.createFriends();
    this.friends.forEach((friend) => {
      friend.y += 2;
      if (!friend.collided) {
        friend.drawFriend();
      }
    });
    this.drawLifes();
    this.colisionEnemy();
    this.displayScore();
  }

  createEnemiesB() {
    if (this.frames % 180 === 0) {
      this.enemiesB.push(new Enemy(this, this.imgB, 100, 60));
    }
  }

  createEnemiesY() {
    if (this.frames % 300 === 0) {
      this.enemiesY.push(new Enemy(this, this.imgY, 50, 30));
    }
  }

  createFriends() {
    if (this.frames % 350 === 0) {
      this.friends.push(new Friends(this));
    }
  }

  colisionEnemy() {
    const player = this.player;
    this.enemiesY.some(function (enemy) {
      if (!enemy.collided && player.crashed(enemy)) {
        enemy.collided = true;
        player.lifes--;
        return player.crashed(enemy);
      }
    });

    this.enemiesB.some((enemy) => {
      if (!enemy.collided && player.crashed(enemy)) {
        enemy.collided = true;
        player.lifes--;
        return player.crashed(enemy);
      }
    });

    if (player.lifes === 0) {
      this.stop();
    }
  }

  drawLifes() {
    const player = this.player;
    this.friends.some(function (friend) {
      if (!friend.collided && player.crashed(friend)) {
        friend.collided = true;

        //player.lifes++;

        player.score++;
        return player.crashed(friend);
      }
    });
    if (this.player.score === 15) {
      this.win();
    }
    switch (this.player.lifes) {
      case 3:
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(10, 15, 300, 20);
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "yellow";
        this.ctx.strokeRect(10, 15, 300, 20);
        break;

      case 2:
        this.ctx.fillStyle = "orange";
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "yellow";
        this.ctx.strokeRect(10, 15, 300, 20);
        this.ctx.fillRect(10, 15, 200, 20);
        break;

      case 1:
        this.ctx.fillStyle = "red";
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "yellow";
        this.ctx.strokeRect(10, 15, 300, 20);
        this.ctx.fillRect(10, 15, 100, 20);
        break;
      case 0:
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "yellow";
        this.ctx.strokeRect(10, 15, 300, 20);
        break;
      default:
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(10, 15, 300, 20);
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "yellow";
        this.ctx.strokeRect(10, 15, 300, 20);
    }
  }

  /* colisionFriends() {
    const player = this.player;
    const colision = this.friends.some(function (friend) {
      if (!friend.collided && player.crashed(friend)) {
        friend.collided = true;
        player.score++;
        return player.crashed(friend);
      }
    });
    if (player.score === 20) {
      this.win();
    }
  } */

  displayScore() {
    this.ctx.font = "20px Star Jedi";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(`${this.player.score} Saved Grogu`, 80, 70);
  }

  win() {
    clearInterval(this.intervalId);
    this.drawBackground();
    this.ctx.font = "40px Star Jedi";
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("you won!!", 300, 350);
  }
}
