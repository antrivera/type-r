function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function () {
  setInterval(() => {
    this.game.tick();
    this.game.draw(this.ctx);
  }, 20);
};

module.exports = GameView;
