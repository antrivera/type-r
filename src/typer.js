const Game = require('./lib/game.js');
const GameView = require('./lib/game_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let game = new Game();
  let gv = new GameView(game, ctx);
  gv.start();
});
