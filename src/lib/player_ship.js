function PlayerShip() {
  this.img = new Image();
  this.img.src = './ship.png';
  this.angle = 0;
  this.x_pos = 250;
  this.y_pos = 550;
  this.target = null;
}

PlayerShip.prototype.draw = function (ctx) {
  ctx.save();
  ctx.translate(250, 550);
  ctx.rotate(this.angle * Math.PI);
  ctx.translate(-250, 0);
  ctx.drawImage(this.img, this.x_pos, 0, 36, 24);
  ctx.restore();
};

PlayerShip.prototype.fire = function (ships, letter) {
  ships.forEach(ship => {
    if (ship.hit(letter, this.target)) {
      this.target = ship;
      let x_len = ship.pos[0] > 250 ? ship.pos[0] - 250 : -(250 - ship.pos[0]);
      let y_len = 700 - ship.pos[1];
      this.angle = Math.atan(x_len/y_len);
    } else {
      this.target = null;
    }
  });
};

module.exports = PlayerShip;
