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
    this.enemies = [];
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
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = "yellow";
    this.ctx.font = "30px serif";
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "red";
    this.ctx.fillText(
      "GAME OVER",
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
    this.createEnemies();
    this.enemies.forEach((enemy) => {
      enemy.y++;
      if (!enemy.collided) {
        enemy.drawEnemy();
      }
    });
    this.createFriends();
    this.friends.forEach((friend) => {
      friend.y += 2;
      if (!friend.collided) {
        friend.drawFriend();
      }
    });
    this.colisionEnemy();
    this.drawLifes();
    this.displayScore();
    this.colisionFriends();
    
  }

  createEnemies() {
    if (this.frames % 180 === 0) {
      this.enemies.push(new Enemy(this));
    }
  }

  createFriends() {
    if (this.frames % 350 === 0) {
      this.friends.push(new Friends(this));
    }
  }

  colisionEnemy() {
    const player = this.player;
    const colision = this.enemies.some(function (enemy) {
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

      case 0:
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "yellow";
        this.ctx.strokeRect(10, 15, 300, 20);
    }
  }

  colisionFriends() {
    const player = this.player;
    const colision = this.friends.some(function (friend) {
      if (!friend.collided && player.crashed(friend)) {
        friend.collided = true;
        player.score++;
        return player.crashed(friend);
      }

      // if(player.score > 2){
      //   player.lifes++;
      // }
    });
    if (player.score === 20) {
      this.win();
    }
  }

  displayScore() {
    this.ctx.font = "20px Star Jedi";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(`${this.player.score} Saved Grogu`, 80, 70);
  }

  win() {
    clearInterval(this.intervalId);
    this.drawBackground();
    this.ctx.font = "40px serif";
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("YOU WON!!", 300, 350);
  }
}
