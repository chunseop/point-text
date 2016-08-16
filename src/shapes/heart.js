import { Dot, FOCAL_LENGTH } from './dot'

export default class Heart extends Dot {
	draw(canvas) {
		var ctx = canvas.getContext('2d');
		var scale = FOCAL_LENGTH / (FOCAL_LENGTH + this.z);
		var me = this;

		// Cubic curves example
		var cs = convertSize;
		ctx.beginPath();
		ctx.moveTo(cs(75, 'x'),cs(50, 'y'));
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
		function convertSize(position, type) {  // convert size
			var t = position / me.radius;
			var coordinate = 0;
			if (type === 'x') 
				coordinate = canvas.width / 2 + (me.x + t - canvas.width / 2) * scale;
			else 
				coordinate = canvas.height / 2 + (me.y + t - canvas.height / 2) * scale;

			return coordinate;
		}
	}
}