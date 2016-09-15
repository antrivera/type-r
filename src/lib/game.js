const EnemyShip = require('./enemy_ship.js');
const PlayerShip = require('./player_ship.js');
const randomWords = require('random-words');

function Game() {
  this.x_dim = 500;
  this.y_dim = 620;
  this.NUM_ENEMY_SHIPS = 2;
  this.enemyShips = [];
  this.starField = new Image();
  this.starField.src = './starfield.jpg';
  this.background_y = 0;
  this.background_y2 = -700;

  this.playerShip = new PlayerShip();
  this.addEnemyShips();

  document.addEventListener("keydown", this.fire(this.enemyShips), false);
}

Game.prototype.getRandomWord = function () {
  return randomWords();
};

Game.prototype.tick = function () {
  this.moveObjects();
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.x_dim, this.y_dim);
  this.drawBackground(ctx);
  this.playerShip.draw(ctx);
  this.enemyShips.forEach(ship => ship.draw(ctx));
};

Game.prototype.moveObjects = function () {
  this.enemyShips.forEach(ship => ship.move());
};

Game.prototype.addEnemyShips = function () {
  for (let i = 0; i < this.NUM_ENEMY_SHIPS; i++) {
    let enemyShip = new EnemyShip({
      pos: [this.randomPosition(), 10],
      vel: [0, 2],
      game: this,
      word: this.getRandomWord()
    });
    this.enemyShips.push(enemyShip);
  }
};

Game.prototype.drawBackground = function (ctx) {
  ctx.drawImage(this.starField, 0, this.background_y, 500, 700);
  ctx.drawImage(this.starField, 0, this.background_y2, 500, 700);

  if (this.background_y > 700) {
    this.background_y = -699;
  }
  if (this.background_y2 > 700) {
    this.background_y2 = -699;
  }

  this.background_y += 1;
  this.background_y2 += 1;
};

Game.prototype.randomPosition = function () {
  let x_pos = Math.random() * (this.x_dim - 59);
  return x_pos;
};

Game.prototype.fire = function (ships) {
  return (e) => {
    switch (e.keyCode) {
      case 8:
        this.playerShip.target = null;
      case 65:
        this.playerShip.fire(ships, 'a')
        break;
      case 66:
        this.playerShip.fire(ships, 'b');
        break;
      case 67:
        this.playerShip.fire(ships, 'c');
        break;
      case 68:
        this.playerShip.fire(ships, 'd');
        break;
      case 69:
        this.playerShip.fire(ships, 'e');
        break;
      case 70:
        this.playerShip.fire(ships, 'f');
        break;
      case 71:
        this.playerShip.fire(ships, 'g');
        break;
      case 72:
        this.playerShip.fire(ships, 'h');
        break;
      case 73:
        this.playerShip.fire(ships, 'i');
        break;
      case 74:
        this.playerShip.fire(ships, 'j');
        break;
      case 75:
        this.playerShip.fire(ships, 'k');
        break;
      case 76:
        this.playerShip.fire(ships, 'l');
        break;
      case 77:
        this.playerShip.fire(ships, 'm');
        break;
      case 78:
        this.playerShip.fire(ships, 'n');
        break;
      case 79:
        this.playerShip.fire(ships, 'o');
        break;
      case 80:
        this.playerShip.fire(ships, 'p');
        break;
      case 81:
        this.playerShip.fire(ships, 'q');
        break;
      case 82:
        this.playerShip.fire(ships, 'r');
        break;
      case 83:
        this.playerShip.fire(ships, 's');
        break;
      case 84:
        this.playerShip.fire(ships, 't');
        break;
      case 85:
        this.playerShip.fire(ships, 'u');
        break;
      case 86:
        this.playerShip.fire(ships, 'v');
        break;
      case 87:
        this.playerShip.fire(ships, 'w');
        break;
      case 88:
        this.playerShip.fire(ships, 'x');
        break;
      case 89:
        this.playerShip.fire(ships, 'y');
        break;
      case 90:
        this.playerShip.fire(ships, 'z');
        break;
      default:
        console.log(e.keyCode);
    }
  }
};


module.exports = Game;
