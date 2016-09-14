function EnemyShip(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.game = options.game;
  this.word = options.word;
  this.health = this.word.length;
}

EnemyShip.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];

  if (this.pos[1] > this.game.y_dim) {
    this.pos[0] = this.game.randomPosition();
    this.pos[1] = 0;
  }
};

EnemyShip.prototype.draw = function (ctx, word) {
  ctx.fillStyle = 'white';
  ctx.font = "bold " + 20 + "px VT323";
  ctx.fillText(this.word, this.pos[0], this.pos[1], 35);
};

EnemyShip.prototype.hit = function (letter) {
  if (this.word[0] === letter) {
    this.word = this.word.slice(1);
  }
};

module.exports = EnemyShip;
