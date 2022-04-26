window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    
    startGame();
  };
};

function startGame() {
  const game = new Space();
  game.start();
}


