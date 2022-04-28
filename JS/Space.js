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
    this.active = false;
    this.soundTie = new Audio("./docs/assets/sounds/tiekillsx.wav");
    this.seconds = 0;
    this.timer = null;
    this.highScore = 0;
    this.storage = null;
    this.winBg = new Image();
  }

  drawBackground() {
    this.backGround.src = "./docs/assets/imgs/backGround2.jpg";
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

    this.checkHighS();

    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);
  }

  stop() {
    const gameOverScreen = document.getElementById("game-over");
    this.canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    gameOverScreen.style.backgroundColor = "red";
    gameOverScreen.innerHTML = `you failed your mission. ${this.player.score} / 15 Grogu saved`;
    this.active = false;
    this.countTime();

    clearInterval(this.intervalId);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.frames++;
    this.drawBackground();
    this.player.drawPlayer();
    this.createEnemies();
    this.enemies.forEach((enemy) => {
      if (enemy.ship === "fighter") {
        enemy.y++;
      } else {
        enemy.y += 2;
      }

      if (!enemy.collided) {
        enemy.drawEnemy();
      }
    });

    this.createFriends();
    this.friends.forEach((friend) => {
      if (friend.droid === "Grogu") {
        friend.y += 2;
      } else {
        friend.y += 2;
      }
      if (!friend.collided) {
        friend.drawFriend();
      }
    });

    this.drawLifes();
    this.displayScore();
    this.colisionEnemy();
    this.colisionFriends();
   
  }

  createEnemies() {
    if (this.frames % 180 === 0) {
      this.enemies.push(new Enemy(this, "fighter", 100, 60));
    }

    if (this.frames % 200 === 0) {
      this.enemies.push(new Enemy(this, "yellow fighter", 60, 35));
    }
  }

  createFriends() {
    if (this.frames % 350 === 0) {
      this.friends.push(new Friends(this, "Grogu", 40, 35));
    }

    if (this.frames % 900 === 0 && this.player.lifes === 1) {
      this.friends.push(new Friends(this, "Bo", 30, 40));
    }
  }

  colisionEnemy() {
    const player = this.player;
    this.enemies.some(function (enemy) {
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

  colisionFriends() {
    const player = this.player;
    this.friends.some(function (friend) {
      if (!friend.collided && player.crashed(friend)) {
        friend.collided = true;
        if (friend.droid === "Grogu") {
          player.score++;
        }
        if (friend.droid === "Bo" && player.lifes < 3) {
          player.lifes++;
        }

        return player.crashed(friend);
      }
    });
    if (player.score === 1) {
      this.win();
      this.highScoreStorage();
    }
  }

  displayScore() {
    this.ctx.font = "20px Star Jedi";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(`${this.player.score} Saved Grogu`, 30, 70);
  }

  win() {
    const gameOverScreen = document.getElementById("game-over");
    this.canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    gameOverScreen.style.backgroundColor = "green";
    gameOverScreen.innerHTML = `"Great job! you saved them all in ${this.seconds} seconds`;
    this.active = false;
    this.countTime();
    this.highScoreStorage();
    clearInterval(this.intervalId);
  }

  countTime() {
    if (this.active) {
      this.timer = setInterval(() => {
        this.seconds++;
      }, 1000);
    } else {
      clearInterval(this.timer);
    }
  }

  highScoreStorage() {
    //localStorage.setItem("highscore", "200");
    //console.log(this.highScore);

   // localStorage.removeItem('highscore');

    if (this.highScore > this.seconds) {
      this.highScore = this.seconds;

      localStorage.setItem("highscore", this.highScore);
    }
    document.getElementsByClassName(
      "HighScore"
    )[0].innerHTML = `Highscore: ${this.highScore} sec`;
  }

  checkHighS() {
    this.storage = localStorage.getItem("highscore");
    if (this.storage) {
      this.highScore = this.storage;

    }
    document.getElementsByClassName(
      "HighScore"
    )[0].innerHTML = `Highscore: ${this.highScore} sec`;
  }
}
