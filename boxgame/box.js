var Box = function(x, y) {
  this.x = x;
  this.y = y;
  this.size = 32;
  this.speed = 100;
}

Box.prototype.update = function(delta, keysDown, grid, scale, player) {
  var posX = this.x;
  var posY = this.y;
  if(player == 1)
    this.move(delta, keysDown);
  this.collision(posX, posY, grid, scale);
}

Box.prototype.collision = function(posX, posY, grid, scale) {
  //Borders
  if(this.x < 0 || this.x + this.size > grid.length * scale)
    this.x = posX;
  if(this.y < 0 || this.y + this.size > grid.length * scale)
    this.y = posY;

  //Walls
  for(var x = 0; x < grid.length; x++) {
    for(var y = 0; y < grid.length; y++) {
      if(grid[y][x] instanceof Wall) {
        if(this.collidesWith(x * scale, y * scale, scale, scale)) {
          this.x = posX;
          this.y = posY;
          if(grid[y][x] instanceof Switch) {
            map.remove(Switch);
            map.remove(Gate);
          }
        }
      }
    }
  }
}

Box.prototype.collidesWith = function(x, y, w, h) {
  if ((this.x + this.size > x && this.x < x + w) &&
    (this.y + this.size > y && this.y < y + h))
    return true;
  return false;
}

Box.prototype.move = function(delta, keysDown) {
  //Left and Right movement
  if(37 in keysDown) {
    this.x -= this.speed * delta;
  }
  else if(39 in keysDown) {
    this.x += this.speed * delta;
  }

  //Up and Down movement
  if(38 in keysDown) {
    this.y -= this.speed * delta;
  }
  else if(40 in keysDown) {
    this.y += this.speed * delta;
  }
}
