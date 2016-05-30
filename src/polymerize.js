import { FOCAL_LENGTH } from './shapes/dot'
const speedRate = 0.05;

export default function polymerize(options) {
	var {
		shape,	// circle, heart, image, rectangle, triangle
		text
	} = options;

	var container = this.container;
	var canvas = this.canvas;
	var context = this.context;

	var dots = this.getTextImageDots(this, shape, text);

	// dot init
	dots.forEach((dot, idx) => {
		dot.x = Math.random() * canvas.width;
		dot.y = Math.random() * canvas.height;
		dot.z = Math.random() * FOCAL_LENGTH * 2;
	});

	var pause = false;

	return {
		animate: function() {
			context.clearRect(0, 0, canvas.width, canvas.height);
			dots.forEach((dot) => {
				if (Math.abs(dot.dx - dot.x) < speedRate/2 && Math.abs(dot.dy - dot.y) < speedRate/2 && Math.abs(dot.dz - dot.z) < speedRate/2) {
					dot.x = dot.dx;
					dot.y = dot.dy;
					dot.z = dot.dz;
					pause = true;
				} else {
					dot.x = dot.x + (dot.dx - dot.x) * speedRate;
					dot.y = dot.y + (dot.dy - dot.y) * speedRate;
					dot.z = dot.z + (dot.dz - dot.z) * speedRate;
				}

				dot.draw(canvas);
			});

			if (!pause) {
				requestAnimationFrame(this.animate.bind(this))
			}
		}
	}
}
