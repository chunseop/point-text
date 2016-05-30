import { Dot, FOCAL_LENGTH } from './dot'

export default class Heart extends Dot {
	draw(canvas) {
    var ctx = canvas.getContext('2d');
    var scale = FOCAL_LENGTH / (FOCAL_LENGTH + this.z);
    var me = this;

    // // Cubic curves example
    // ctx.beginPath();
    // ctx.moveTo(cs(75),cs(50));
    // ctx.bezierCurveTo(cs(75), cs(38), cs(70), cs(25), cs(50), cs(25));
    // ctx.bezierCurveTo(cs(20), cs(25), cs(20), cs(60), cs(20), cs(60));
    // ctx.bezierCurveTo(cs(20), cs(80), cs(40), cs(102), cs(75), cs(120));
    // ctx.bezierCurveTo(cs(110), cs(102), cs(130), cs(80), cs(130), cs(60));
    // ctx.bezierCurveTo(cs(130), cs(60), cs(130), cs(25), cs(100), cs(25));
    // ctx.bezierCurveTo(cs(85), cs(25), cs(75), cs(38), cs(75), cs(50));
    // ctx.fillStyle = "rgba(50,50,50," + scale + ")";
    // ctx.fill();

    // Cubic curves example
    ctx.beginPath();
    ctx.moveTo(cs(75),cs(50));
    ctx.bezierCurveTo(cs(75), cs(38), cs(70), cs(25), cs(50), cs(25));
    ctx.bezierCurveTo(cs(20), cs(25), cs(20), cs(60), cs(20), cs(60));
    ctx.bezierCurveTo(cs(20), cs(80), cs(40), cs(100), cs(42), cs(103));
    ctx.bezierCurveTo(cs(42), cs(103), cs(62), cs(115), cs(60), cs(130));
    ctx.bezierCurveTo(cs(110), cs(105), cs(130), cs(80), cs(130), cs(60));
    ctx.bezierCurveTo(cs(130), cs(60), cs(130), cs(25), cs(100), cs(25));
    ctx.bezierCurveTo(cs(85), cs(25), cs(75), cs(38), cs(75), cs(50));
    ctx.fillStyle = "rgba(50,50,50," + scale + ")";
    ctx.fill();

    function cs(position) {  // convert size
      // var x = canvas.width / 2 + (me.x - canvas.width / 2) * scale;
      // var y = canvas.height / 2 + (me.y - canvas.height / 2) * scale;

      return position / 8
    }
	}
}