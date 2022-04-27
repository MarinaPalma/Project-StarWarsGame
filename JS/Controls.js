class Controls {
  constructor(space) {
    this.space = space;
    this.player = this.space.player;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowRight":
          if (this.player.x + this.player.width < 670) {
            this.player.moveRight();
            this.player.changeImg();
          }
          break;
        case "ArrowLeft":
          if (this.player.x > 20) {
            this.player.moveLeft();
            this.player.changeImg();
          }
          break;
      }
    });
  }
}
