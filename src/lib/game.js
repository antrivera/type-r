const EnemyShip = require('./enemy_ship.js');
const PlayerShip = require('./player_ship.js');
const randomWords = require('random-words');

function Game() {
  this.x_dim = 500;
  this.y_dim = 620;
  this.NUM_ENEMY_SHIPS = 2;
  this.enemyShips = [];
  this.starField = new Image();
  this.starField.src = './src/assets/images/starfield.jpg';
  this.background_y = 0;
  this.background_y2 = -700;

  this.titleScreen = true;
  this.gameOver = false;
  this.round2 = false;
  this.score = '0';

  this.playerShip = new PlayerShip();

  document.addEventListener("keydown", this.fire(this.enemyShips), false);
}

Game.prototype.getRandomWord = function () {
  return randomWords();
};

Game.prototype.tick = function () {
  if (!this.titleScreen && this.enemyShips.length < 2) {
    this.addEnemyShips();
  }

  if (this.score > 1000 && !this.round2) {
    this.NUM_ENEMY_SHIPS++;
    this.addEnemyShips();
    this.round2 = true;
  }

  this.moveObjects();
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.x_dim, this.y_dim);
  this.drawBackground(ctx);

  if (this.titleScreen) {
    ctx.fillStyle = 'white';
    ctx.font = "bold " + 72 + "px VT323";
    ctx.fillText("Type-R", 250, 250);
    ctx.font = 32 + "px VT323";
    ctx.fillText("War on Words", 270, 300);
    ctx.font = 20 + "px VT323";
    ctx.fillText("Press [Enter] to Start", 260, 350);
    this.playerShip.draw(ctx);
  } else if (this.gameOver) {

    while (this.enemyShips.length > 0) {
      this.enemyShips.pop();
    }

    ctx.fillStyle = 'white';
    ctx.font = "bold " + 72 + "px VT323";
    ctx.fillText("GAME OVER", 125, 250);
    ctx.font = 32 + "px VT323";
    ctx.fillText("Your Score: " + this.score, 160, 300);
    ctx.font = 20 + "px VT323";
    ctx.fillText("Press [Enter] to Play Again", 150, 350);
  } else {
    ctx.font = "bold " + 20 + "px VT323";
    ctx.fillText("Score: " + this.score, 25, 25);
    this.playerShip.draw(ctx);
  }

  this.enemyShips.forEach(ship => ship.draw(ctx));
};

Game.prototype.moveObjects = function () {
  this.enemyShips.forEach(ship => ship.move());
};

Game.prototype.addEnemyShips = function () {
  while (this.enemyShips.length < this.NUM_ENEMY_SHIPS) {
    let enemyShip = new EnemyShip({
      pos: [this.randomPosition(), 10],
      vel: [0, 2],
      game: this,
      word: this.getRandomWord()
    });
    this.enemyShips.push(enemyShip);
  }
};

Game.prototype.setGameOver = function () {
  this.gameOver = true;
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
      case 13:
        if (this.titleScreen) {
          this.titleScreen = false;
        }

        if (this.gameOver) {
          this.gameOver = false;
          this.score = '0';
          this.NUM_ENEMY_SHIPS = 2;
          this.round2 = false;
        }
        break;
      case 8:
        if (this.gameOver)
          return;
        this.playerShip.target = null;
      case 65:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'a')
        break;
      case 66:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'b');
        break;
      case 67:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'c');
        break;
      case 68:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'd');
        break;
      case 69:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'e');
        break;
      case 70:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'f');
        break;
      case 71:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'g');
        break;
      case 72:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'h');
        break;
      case 73:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'i');
        break;
      case 74:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'j');
        break;
      case 75:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'k');
        break;
      case 76:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'l');
        break;
      case 77:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'm');
        break;
      case 78:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'n');
        break;
      case 79:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'o');
        break;
      case 80:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'p');
        break;
      case 81:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'q');
        break;
      case 82:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'r');
        break;
      case 83:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 's');
        break;
      case 84:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 't');
        break;
      case 85:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'u');
        break;
      case 86:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'v');
        break;
      case 87:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'w');
        break;
      case 88:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'x');
        break;
      case 89:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'y');
        break;
      case 90:
        if (this.gameOver)
          return;
        this.playerShip.fire(ships, 'z');
        break;
      default:
        console.log(e.keyCode);
    }
  }
};


module.exports = Game;
