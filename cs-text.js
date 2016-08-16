(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = animate;

var _dot = require('../shapes/dot');

function animate(type, speedRate, shape, shapeSize) {
	// type: circle, heart, image, rectangle, triangle

	var canvas = this.canvas;
	var width = canvas.width;
	var height = canvas.height;


	var dots = this.getTextImageDots(shape, shapeSize);
	dotInit.call(this, type, dots, width, height);

	var context = this.context;
	var finish = false;
	var me = this;
	return {
		start: function start(callback) {
			context.clearRect(0, 0, width, height);
			dots.forEach(function (dot) {
				if (Math.abs(dot.dx - dot.x) < shapeSize / 2 && Math.abs(dot.dy - dot.y) < shapeSize / 2 && Math.abs(dot.dz - dot.z) < shapeSize / 2) {
					dot.x = dot.dx;
					dot.y = dot.dy;
					dot.z = dot.dz;
				} else {
					dot.x += (dot.dx - dot.x) * speedRate;
					dot.y += (dot.dy - dot.y) * speedRate;
					dot.z += (dot.dz - dot.z) * speedRate;
				}

				dot.draw(canvas);
			});

			requestAnimationFrame(this.start.bind(this));
		}
	};
}

function dotInit(type, dots, width, height) {
	if (type === 'polymerize') {
		// dot init
		dots.forEach(function (dot, idx) {
			dot.x = Math.random() * width;
			dot.y = Math.random() * height;
			dot.z = Math.random() * _dot.FOCAL_LENGTH * 2;
		});
	} else {
		// volatilize
		dots.forEach(function (dot, idx) {
			dot.dx = Math.random() * width;
			dot.dy = Math.random() * height;
			dot.dz = Math.random() * _dot.FOCAL_LENGTH * 2;
		});
	}

	return dots;
}

},{"../shapes/dot":4}],2:[function(require,module,exports){
'use strict';

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') window.csText = _text2.default;

},{"./text":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dot = require('./dot');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = function (_Dot) {
	_inherits(Circle, _Dot);

	function Circle() {
		_classCallCheck(this, Circle);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Circle).apply(this, arguments));
	}

	_createClass(Circle, [{
		key: 'draw',
		value: function draw(canvas) {
			var context = canvas.getContext('2d');

			context.save();
			context.beginPath();

			var scale = _dot.FOCAL_LENGTH / (_dot.FOCAL_LENGTH + this.z);
			// var x = canvas.width / 2 + (this.x - canvas.width / 2) * scale;
			// var y = canvas.height / 2 + (this.y - canvas.height / 2) * scale;
			context.arc(this.x, this.y, this.radius * scale, 0, 2 * Math.PI);
			context.fillStyle = "rgba(50,50,50," + scale + ")";
			context.fill();

			context.restore();
		}
	}]);

	return Circle;
}(_dot.Dot);

exports.default = Circle;

},{"./dot":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FOCAL_LENGTH = exports.FOCAL_LENGTH = 250;

var Dot = exports.Dot = function () {
	function Dot(centerX, centerY, centerZ, radius) {
		_classCallCheck(this, Dot);

		this.dx = centerX; // destination x
		this.dy = centerY;
		this.dz = centerZ;
		this.x = 0; // Math.random() * canvas.width
		this.y = 0; // Math.random() * canvas.height
		this.z = 0; // Math.random() * FOCAL_LENGTH * 2
		this.radius = radius;
	}

	_createClass(Dot, [{
		key: "draw",
		value: function draw(canvas) {}
	}]);

	return Dot;
}();

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dot = require('./dot');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Heart = function (_Dot) {
	_inherits(Heart, _Dot);

	function Heart() {
		_classCallCheck(this, Heart);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Heart).apply(this, arguments));
	}

	_createClass(Heart, [{
		key: 'draw',
		value: function draw(canvas) {
			var ctx = canvas.getContext('2d');
			var scale = _dot.FOCAL_LENGTH / (_dot.FOCAL_LENGTH + this.z);
			var me = this;

			// Cubic curves example
			var cs = convertSize;
			ctx.beginPath();
			ctx.moveTo(cs(75, 'x'), cs(50, 'y'));
			ctx.bezierCurveTo(cs(75, 'x'), cs(38, 'y'), cs(70, 'x'), cs(25, 'y'), cs(50, 'x'), cs(25, 'y'));
			ctx.bezierCurveTo(cs(20, 'x'), cs(25, 'y'), cs(20, 'x'), cs(60, 'y'), cs(20, 'x'), cs(60, 'y'));
			ctx.bezierCurveTo(cs(20, 'x'), cs(80, 'y'), cs(40, 'x'), cs(100, 'y'), cs(42, 'x'), cs(103, 'y'));
			ctx.bezierCurveTo(cs(42, 'x'), cs(103, 'y'), cs(62, 'x'), cs(115, 'y'), cs(60, 'x'), cs(130, 'y'));
			ctx.bezierCurveTo(cs(110, 'x'), cs(105, 'y'), cs(130, 'x'), cs(80, 'y'), cs(130, 'x'), cs(60, 'y'));
			ctx.bezierCurveTo(cs(130, 'x'), cs(60, 'y'), cs(130, 'x'), cs(25, 'y'), cs(100, 'x'), cs(25, 'y'));
			ctx.bezierCurveTo(cs(85, 'x'), cs(25, 'y'), cs(75, 'x'), cs(38, 'y'), cs(75, 'x'), cs(50, 'y'));
			ctx.fillStyle = "rgba(50,50,50," + scale + ")";
			ctx.fill();

			var me = this;
			function convertSize(position, type) {
				// convert size
				var t = position / me.radius;
				var coordinate = 0;
				if (type === 'x') coordinate = canvas.width / 2 + (me.x + t - canvas.width / 2) * scale;else coordinate = canvas.height / 2 + (me.y + t - canvas.height / 2) * scale;

				return coordinate;
			}
		}
	}]);

	return Heart;
}(_dot.Dot);

exports.default = Heart;

},{"./dot":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import Triangle from './shapes/triangle'
// import Rectangle from './shapes/rectangle'

var _circle = require('./shapes/circle');

var _circle2 = _interopRequireDefault(_circle);

var _heart = require('./shapes/heart');

var _heart2 = _interopRequireDefault(_heart);

var _animate = require('./animate/animate');

var _animate2 = _interopRequireDefault(_animate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Text = function () {
  function Text(container, width, height, text) {
    _classCallCheck(this, Text);

    this.canvas = document.createElement('canvas');
    var canvas = this.canvas;
    canvas.width = width;
    canvas.height = height;

    this.context = canvas.getContext('2d');
    this.container = container || document.getElementById('container');

    this.container.appendChild(canvas);
    if (text) this.drawText(text);
  }

  _createClass(Text, [{
    key: 'drawText',
    value: function drawText() {
      var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var _canvas = this.canvas;
      var width = _canvas.width;
      var height = _canvas.height;

      var context = this.context;

      var fontSize = height * 0.8;
      context.save();
      context.font = fontSize + 'px 微软雅黑 bold';
      context.fillStyle = 'rgba(128,128,128,1)';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(text, width / 2, height / 2);
      context.restore();
    }
  }, {
    key: 'getTextImageDots',
    value: function getTextImageDots(shape, r, text) {
      var _canvas2 = this.canvas;
      var width = _canvas2.width;
      var height = _canvas2.height;

      var context = this.context;

      if (text) {
        this.drawText(text);
      }

      var imageData = context.getImageData(0, 0, width, height);
      context.clearRect(0, 0, width, height);

      var dots = [];
      for (var x = 0; x < imageData.width; x += r * 2) {
        for (var y = 0; y < imageData.height; y += r * 2) {
          var i = (y * imageData.width + x) * 4;
          if (imageData.data[i] >= 128) {
            // var dot = new Circle(x-r, y-r, 0, r);
            var dot = new _heart2.default(x - r, y - r, 0, r); // center x, y, z, & radius

            dots.push(dot);
          }
        }
      }

      return dots;
    }
  }]);

  return Text;
}();

exports.default = Text;


Object.assign(Text.prototype, {
  animate: _animate2.default
});

},{"./animate/animate":1,"./shapes/circle":3,"./shapes/heart":5}]},{},[2]);
