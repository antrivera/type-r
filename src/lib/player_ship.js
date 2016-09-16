function PlayerShip() {
  this.img = new Image();
  this.laser_img = new Image();
  this.laser_img.src = './src/laser.png';
  this.img.src = './src/ship.png';
  this.angle = 0;
  this.x_pos = 250;
  this.y_pos = 550;
  this.target = null;
  this.laserPos = [250, -60];
  this.laserVel = [1, -30];
}

PlayerShip.prototype.draw = function (ctx) {
  ctx.save();
  ctx.translate(250, 550);
  ctx.rotate(this.angle * Math.PI);
  ctx.translate(-250, 0);
  ctx.drawImage(this.img, this.x_pos, 0, 36, 24);
  ctx.restore();

  this.drawLaser(ctx, this.angle);
};

PlayerShip.prototype.drawLaser = function (ctx, angle) {
  ctx.save();
  ctx.translate(250, 550);
  ctx.rotate(this.angle * Math.PI);
  ctx.translate(-250, 0);
  this.laserPos[1] += this.laserVel[1];
  ctx.drawImage(this.laser_img, this.x_pos, this.laserPos[1], 36, 72);
  ctx.restore();
};

PlayerShip.prototype.fire = function (ships, letter) {
  ships.forEach(ship => {
    if (ship.hit(letter, this.target)) {
      this.target = ship;

      let x_len;
      if (Math.abs(ship.pos[0] - 250) <= 4) {
        x_len = 0;
      } else {
        x_len = ship.pos[0] > 250 ? (ship.pos[0] - 250) : -(250 - ship.pos[0]);
      }
      let y_len = 1100 - (ship.pos[1]);
      this.angle = Math.atan(x_len/y_len);

      this.laserPos[1] = -60;
      let laser = document.getElementById('laser').cloneNode();
      laser.play();
    } else {
      this.target = null;
      let miss = document.getElementById('miss').cloneNode();
      miss.play();
    }
  });
};

module.exports = PlayerShip;
