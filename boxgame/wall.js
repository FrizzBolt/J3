var Wall = function() {

}

Wall.prototype.draw = function(context, x, y, scale, player) {
  context.fillStyle = "#AAAAAA";
  context.fillRect(x * scale, y * scale, scale, scale);
}


var Gate = function() {

}
Gate.prototype = new Wall();
Gate.prototype.constructor=Gate;

Gate.prototype.draw = function(context, x, y, scale, player) {
  if(player == 2) {
    context.fillStyle = "#BB0000";
    context.fillRect(x * scale, y * scale, scale, scale);
  }
}

var Switch = function() {

}
Switch.prototype = new Wall();
Switch.prototype.constructor=Switch;

Switch.prototype.draw = function(context, x, y, scale, player) {
  if(player == 2) {
    context.fillStyle = "#00FF00";
    context.fillRect(x * scale, y * scale, scale, scale);
  }
}


var Gate2 = function() {

}
Gate2.prototype = new Wall();
Gate2.prototype.constructor=Gate2;

Gate2.prototype.draw = function(context, x, y, scale, player) {
  if(player == 1) {
    context.fillStyle = "#FFA500";
    context.fillRect(x * scale, y * scale, scale, scale);
  }
}
