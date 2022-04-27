let game = null;
const descriptionScr = document.getElementById("mainSc");
const canvasScr = document.getElementById("game-board");
const startScr = document.getElementById("startScr");
const restartBt = document.getElementById("restart-button");
const startBt = document.getElementById("start-button");



// function startGame() {
//   if (!game) {
//     game = new Space();
//     game.start();
//   }
// }; 



function startGame() {
startBt.style.display="none";
restartBt.style.display="flex";
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
  
  startScr.style.display ="none";
  descriptionScr.style.display="flex";
  setTimeout(()=> {
    descriptionScr.style.display="none";
    canvasScr.style.display="flex";
    startGame();
  }, 10000);

  };

  document.getElementById("restart-button").onclick = () => {
  
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


