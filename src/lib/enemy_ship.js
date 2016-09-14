function EnemyShip(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.game = options.game;
  this.word = options.word;
  this.health = this.word.length;
  this.img = new Image();
  this.img.src = './ufo.png';
}

EnemyShip.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];

  if (this.pos[1] + 60 > this.game.y_dim) {
    this.pos[0] = this.game.randomPosition();
    this.pos[1] = -10;
  }
};

EnemyShip.prototype.draw = function (ctx) {
  ctx.drawImage(this.img, 10, 10, 59, 59, this.pos[0], this.pos[1], 59, 59);
  ctx.fillStyle = 'white';
  ctx.font = "bold " + 20 + "px VT323";
  ctx.fillText(this.word, this.pos[0], this.pos[1] + 80, 35);
};

EnemyShip.prototype.hit = function (letter) {
  if (this.word[0] === letter) {
    this.word = this.word.slice(1);
  }
};

module.exports = EnemyShip;
