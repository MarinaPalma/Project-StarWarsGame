let game = null;

function startGame() {
  if (!game) {
    game = new Space();
  }
  if (!game.isActive) {
    clearInterval(game.intervalId);
    game.ctx.clearRect(0, 0, game.width, game.height);
    game = new Space();
    game.start();
  }
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
  
    startGame();
  };
};

//  window.onload = () => {
//   document.getElementById("start-button").onclick = () => {
//     startGame();
//   };

//   let game = null;

//   function startGame() {
//     if (!game) {
//       game = new Space();
//       game.start();
//     }
//   }
// }; 
