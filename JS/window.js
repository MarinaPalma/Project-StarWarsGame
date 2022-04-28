let game = null;
const descriptionScr = document.getElementById("mainSc");
// const canvasScr = document.getElementById("game-board");
const startScr = document.getElementById("startScr");
const restartBt = document.getElementById("restart-button");
const startBt = document.getElementById("start-button");
const gameOverScreen = document.getElementById('game-over')
const soundBeg = new Audio(
  "docs/assets/sounds/Star_Wars_original_opening_crawl_1977.mp3"
);






function startGame() {
startBt.style.display="none";
restartBt.style.display="flex";

  if (!game) {
    game = new Space();
    game.canvas.style.display="flex";
    
  }
  if (!game.active) {
    clearInterval(game.intervalId);
    game.ctx.clearRect(0, 0, game.width, game.height);
    game = new Space();
    game.canvas.style.display="flex";
    game.start();
    game.countTime();
  }
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {

  soundBeg.play();
  startScr.style.display ="none";
  descriptionScr.style.display="flex";
 
  setTimeout(()=> {
    descriptionScr.style.display="none";
    // canvasScr.style.display = "flex"
    startGame();
  }, 18000);

  };

  document.getElementById("restart-button").onclick = () => {
    gameOverScreen.style.display = "none";
    startScr.style.display ="none";
    descriptionScr.style.display="none";
  startGame();
  
    };
};








//  window.onload = () => {
//   document.getElementById("start-button").onclick = () => {
//     startGame();
//   };

//   let game = null;

// function startGame() {
//   if (!game) {
//     game = new Space();
//     game.start();
//   }
// }; 

