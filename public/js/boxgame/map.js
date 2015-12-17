var Map = function(scale, gridMap) {
  this.scale = scale;
  this.grid = this.gridToMap(gridMap);
}

Map.prototype.draw = function(context) {
  for(var x = 0; x < this.grid.length; x++) {
    for(var y = 0; y < this.grid.length; y++) {
      if(this.grid[y][x] !== 0) {
        this.grid[y][x].draw(context, x, y, this.scale);
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
      if(grid[y][x] == 1) {
        new_grid[y][x] = new Wall();
      }
    }
  }
  return new_grid;
}
