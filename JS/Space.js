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

   

    //this.drawLifes();

    this.player.drawPlayer();
    this.createEnemies();
    this.enemies.forEach((enemy) => {
      enemy.y++;
      enemy.drawEnemy();
    });
    this.createFriends();
    this.friends.forEach((friend) => {
      friend.y += 2;
      friend.drawFriend();
    });
    this.colisionEnemy();
    this.colisionFriends();
    this.displayLifes();
    this.displayScore();
  }

  createEnemies() {
    if (this.frames % 200 === 0) {
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
  displayLifes() {
    this.ctx.font = "20px serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Lifes left: ${this.player.lifes}`, 50, 70);
  }

  drawLifes() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(10, 15, 300, 20);
  }

  colisionFriends() {
    const player = this.player;
    const colision = this.friends.some(function (friend) {
      console.log("friends:"+ friend.collided + "collided:"+ player.crashed(friend))
      if(!friend.collided && player.crashed(friend)){
        friend.collided = true;
        player.score++;
        return player.crashed(friend);
      }
      
    });
  }

  displayScore() {
    this.ctx.font = "20px serif";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(`${this.player.score} Saved Grogu`, 50, 30);
  }

  gameOver() {
    this.ctx.font = "30px Pathway Gothic One";
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "red";
    this.ctx.fillText(
      "GAME OVER",
      this.canvas.width / 2,
      this.canvas.height / 2
    );
  }
}
