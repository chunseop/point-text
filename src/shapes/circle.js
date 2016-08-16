import { Dot, FOCAL_LENGTH } from './dot'

export default class Circle extends Dot {
	draw(canvas) {
		var context = canvas.getContext('2d')

		context.save();
		context.beginPath();

		var scale = FOCAL_LENGTH / (FOCAL_LENGTH + this.z);
		// var x = canvas.width / 2 + (this.x - canvas.width / 2) * scale;
		// var y = canvas.height / 2 + (this.y - canvas.height / 2) * scale;
		context.arc(this.x, this.y, this.radius * scale, 0, 2 * Math.PI);
		context.fillStyle = "rgba(50,50,50," + scale + ")";
		context.fill();
		
		context.restore();
	}
}