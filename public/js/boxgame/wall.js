var Wall = function() {

}

Wall.prototype.draw = function(context, x, y, scale) {
  context.fillStyle = "#AAAAAA";
  context.fillRect(x * scale, y * scale, scale, scale);
}
