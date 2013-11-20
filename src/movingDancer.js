var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="src/cartman.png" class="cartman" />');
  // debugger;
  // // this.setPosition(top, left);
  // debugger;
  this.class = 'cartman';
  var num = Math.floor(Math.random()*2);
  var direction = ['left', 'right'];
  var upDown = ['upward', 'downward'];
  this.move(direction[num], upDown[num]);
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.move = function(direction, upDown) {

  if (this.left > $(window).width() - 80) { direction = 'left'; }
  if (this.left < 0) { direction = 'right'; }
  if (direction === 'left') { this.left = this.left - 15; }
  if (direction === 'right') { this.left = this.left + 15; }

  if (this.top > $(window).height() - 80) { upDown = 'upward'; }
  if (this.top < 0) { upDown = 'downward'; }
  if (upDown === 'upward') { this.top = this.top - 15; }
  if (upDown === 'downward') { this.top = this.top + 15; }

  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);

  var that = this;
  var moveCallback = function() {
    that.move(direction, upDown);
  };
  setTimeout(moveCallback, 75);
};