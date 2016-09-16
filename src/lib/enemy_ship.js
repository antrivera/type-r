function EnemyShip(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.game = options.game;
  this.word = options.word;
  this.health = this.word.length;
  this.img = new Image();
  this.img.src = './src/ufo.png';
}

EnemyShip.prototype.move = function () {
  this.pos[0] += this.pos[0] < 250 ? 0.50 : -0.50;
  this.pos[1] += this.vel[1];

  if (this.pos[1] + 60 > this.game.y_dim) {
    this.pos[0] = this.game.randomPosition();
    this.pos[1] = -10;
  }

  if (this.pos[0] === 250 || this.pos[1] === 500) {
    this.game.setGameOver();
  }
};

EnemyShip.prototype.draw = function (ctx) {
  if (!this.word.length) {
    this.pos[0] = this.game.randomPosition();
    this.pos[1] = -80;
    this.word = this.game.getRandomWord();
  }

  ctx.drawImage(this.img, 10, 10, 59, 59, this.pos[0], this.pos[1], 59, 59);
  ctx.fillStyle = 'white';
  ctx.font = "bold " + 20 + "px VT323";
  ctx.fillText(this.word, this.pos[0], this.pos[1] + 80, 50);
};

EnemyShip.prototype.hit = function (letter, target) {
  if ((target === this || target === null) && this.word[0] === letter) {
    this.word = this.word.slice(1);
    this.pos[1] -= 8;

    let intScore = parseInt(this.game.score, 10);
    intScore += 10;
    this.game.score = intScore.toString();

    if (this.word.length === 0) {
      intScore += 100;
      this.game.score = intScore.toString();

      let explosion = document.getElementById('explosion').cloneNode();
      explosion.play();
      return false;
    }

    return true;
  }

  return false;
};

module.exports = EnemyShip;
