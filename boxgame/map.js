var Map = function(scale, gridMap) {
  this.scale = scale;
  this.grid = this.gridToMap(gridMap);
}

Map.prototype.draw = function(context, player) {
  for(var x = 0; x < this.grid.length; x++) {
    for(var y = 0; y < this.grid.length; y++) {
      if(this.grid[y][x] !== 0) {
        this.grid[y][x].draw(context, x, y, this.scale, player);
      }
    }
  }
}

Map.prototype.remove = function(obj) {
  for(var x = 0; x < this.grid.length; x++) {
    for(var y = 0; y < this.grid.length; y++) {
      if(this.grid[y][x] instanceof obj) {
        this.grid[y][x] = 0;
      }
    }
  }
}

Map.prototype.gridToMap = function(grid) {
  var new_grid = new Array(grid.length).fill(0);
  for(var x = 0; x < grid.length; x++) {
    new_grid[x] = new Array(grid.length).fill(0);
  }
  for(var x = 0; x < grid.length; x++) {
    for(var y = 0; y < grid.length; y++) {
      if(grid[y][x] == 1)
        new_grid[y][x] = new Wall();
      else if(grid[y][x] == 2)
        new_grid[y][x] = new Gate();
      else if(grid[y][x] == 3)
        new_grid[y][x] = new Gate2();
      else if(grid[y][x] == 4)
        new_grid[y][x] = new Switch();
    }
  }
  return new_grid;
}
