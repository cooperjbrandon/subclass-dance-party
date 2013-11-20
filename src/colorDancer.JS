var ColorDancer = function(top, left, timeBetweenSteps) {

  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  var rr = Math.floor(Math.random()*256);
  var gg = Math.floor(Math.random()*256);
  var bb = Math.floor(Math.random()*256);
  var color = 'rgb('+ rr +',' + gg +','+ bb + ')';
  var size = 5 + Math.floor(Math.random()*11) + 'px';
  this.$node.css( 'border', size + ' dotted ' + color);
  this.$node.css( 'border-radius', size);
};

ColorDancer.prototype = Object.create(BlinkyDancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;