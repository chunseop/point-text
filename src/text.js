import Circle from './shapes/circle'
import Heart from './shapes/heart'
// import Triangle from './shapes/triangle'
// import Rectangle from './shapes/rectangle'

import animate from './animate/animate'

export default class Text {
  constructor(container, width, height, text) {
    this.canvas = document.createElement('canvas');
    var canvas = this.canvas;
    canvas.width = width;
    canvas.height = height;

    this.context = canvas.getContext('2d');
    this.container = container || document.getElementById('container');

    this.container.appendChild(canvas);
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
    context.fillStyle = 'rgba(128,128,128,1)';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, width/2, height/2);
    context.restore();
  }

  getTextImageDots(shape, r, text) {
    var {
      width,
      height
    } = this.canvas;
    var context = this.context;

    if (text) {
      this.drawText(text);      
    }
    
    var imageData = context.getImageData(0, 0, width, height);
    context.clearRect(0, 0, width, height)

    var dots = [];
    for (var x = 0; x < imageData.width; x += r * 2) {
      for (var y = 0; y < imageData.height; y += r * 2) {
        var i = (y * imageData.width + x) * 4;
        if (imageData.data[i] >= 128) {
          // var dot = new Circle(x-r, y-r, 0, r);
          var dot = new Heart(x-r, y-r, 0, r); // center x, y, z, & radius

          dots.push(dot);
        }
      }
    }

    return dots;
  }
}

Object.assign(Text.prototype, {
  animate
});