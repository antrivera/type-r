function PlayerShip() {
  this.img = new Image();
  this.img.src = './ship.png';
  this.x_pos = 250;
  this.y_pos = 580;
}

PlayerShip.prototype.draw = function (ctx) {
  ctx.drawImage(this.img, this.x_pos, this.y_pos, 35, 25);
};

module.exports = PlayerShip;
