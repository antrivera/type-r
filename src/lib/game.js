const EnemyShip = require('./enemy_ship.js');

const WORDS = [
  'apple', 'bye'
]

function Game() {
  this.x_dim = 500;
  this.y_dim = 500;
  this.NUM_ENEMY_SHIPS = 2;
  this.enemyShips = [];

  this.addEnemyShips();

  document.addEventListener("keydown", this.fire(this.enemyShips), false);
}

Game.prototype.tick = function () {
  this.moveObjects();
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.x_dim, this.y_dim);
  this.enemyShips.forEach(ship => ship.draw(ctx));
};

Game.prototype.moveObjects = function () {
  this.enemyShips.forEach(ship => ship.move());
};

Game.prototype.addEnemyShips = function () {
  for (let i = 0; i < this.NUM_ENEMY_SHIPS; i++) {
    let enemyShip = new EnemyShip({
      pos: [this.randomPosition(), 10],
      vel: [0, 1],
      game: this,
      word: WORDS[Math.floor(Math.random() * WORDS.length)]
    });
    this.enemyShips.push(enemyShip);
  }
};

Game.prototype.fire = function (ships) {
  return (e) => {
    switch (e.keyCode) {
      case 65:
      ships.forEach(ship => ship.hit('a'));
      break;
      case 66:
      ships.forEach(ship => ship.hit('b'));
      break;
      case 67:
      ships.forEach(ship => ship.hit('c'));
      break;
      case 68:
      ships.forEach(ship => ship.hit('d'));
      break;
      case 69:
      ships.forEach(ship => ship.hit('e'));
      break;
      case 70:
      ships.forEach(ship => ship.hit('f'));
      break;
      case 71:
      ships.forEach(ship => ship.hit('g'));
      break;
      case 72:
      ships.forEach(ship => ship.hit('h'));
      break;
      case 73:
      ships.forEach(ship => ship.hit('i'));
      break;
      case 74:
      ships.forEach(ship => ship.hit('j'));
      break;
      case 75:
      ships.forEach(ship => ship.hit('k'));
      break;
      case 76:
      ships.forEach(ship => ship.hit('l'));
      break;
      case 77:
      ships.forEach(ship => ship.hit('m'));
      break;
      case 78:
      ships.forEach(ship => ship.hit('n'));
      break;
      case 79:
      ships.forEach(ship => ship.hit('o'));
      break;
      case 80:
      ships.forEach(ship => ship.hit('p'));
      break;
      case 81:
      ships.forEach(ship => ship.hit('q'));
      break;
      case 82:
      ships.forEach(ship => ship.hit('r'));
      break;
      case 83:
      ships.forEach(ship => ship.hit('s'));
      break;
      case 84:
      ships.forEach(ship => ship.hit('t'));
      break;
      case 85:
      ships.forEach(ship => ship.hit('u'));
      break;
      case 86:
      ships.forEach(ship => ship.hit('v'));
      break;
      case 87:
      ships.forEach(ship => ship.hit('w'));
      break;
      case 88:
      ships.forEach(ship => ship.hit('x'));
      break;
      case 89:
      ships.forEach(ship => ship.hit('y'));
      break;
      case 90:
      ships.forEach(ship => ship.hit('z'));
      break;
      default:
      console.log('invalid key');
    }
  }
};

Game.prototype.randomPosition = function () {
  let x_pos = Math.random() * this.x_dim;
  return x_pos;
};

module.exports = Game;
