import Circle from './shapes/circle'
import Heart from './shapes/heart'
// import Triangle from './shapes/triangle'
// import Rectangle from './shapes/rectangle'

import polymerize from './polymerize'
import volatilize from './volatilize'

export default class Text {
  constructor(container, width, height, text) {
    this.canvas = document.createElement('canvas');
    var canvas = this.canvas;
    canvas.width = width;
    canvas.height = height;

    this.context = canvas.getContext('2d');
    this.container = container;

    container.appendChild(canvas);
    if (text) this.drawText(text);
  }

  drawText(text = '') {
    var {
      width,
      height
    } = this.canvas;
    var context = this.context;

    var fontSize = height * 0.8
    context.save()
    context.font = fontSize + 'px 微软雅黑 bold';
    context.fillStyle = 'rgba(168,168,168,1)';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, width/2, height/2);
    context.restore();
  }

  getTextImageDots(shape, text) {
    var {
      width,
      height
    } = this.canvas;
    var context = this.context;

    this.drawText(text);
    var imageData = context.getImageData(0, 0, width, height);
    context.clearRect(0, 0, width, height)

    var dots = [];
    for (var x = 0; x < imageData.width; x += 6) {
      for (var y = 0; y < imageData.height; y += 6) {
        var i = (y * imageData.width + x) * 4;
        if (imageData.data[i] >= 128) {
          // var dot = new Circle(x-3, y-3, 0, 3);
          var dot = new Heart(x-3, y-3, 0, 3);

          dots.push(dot);
        }
      }
    }

    return dots;
  }
}

Object.assign(Text.prototype, {
  polymerize,
  volatilize
});