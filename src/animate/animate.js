import { FOCAL_LENGTH } from '../shapes/dot'

export default function animate(type, speedRate, shape, shapeSize) {
	// type: circle, heart, image, rectangle, triangle
	
	var canvas = this.canvas;
	var {
		width,
		height
	} = canvas;

	var dots = this.getTextImageDots(shape, shapeSize);
	dotInit.call(this, type, dots, width, height);

	var context = this.context;
	var finish = false;
	var me = this;
	return {
		start: function(callback) {
			context.clearRect(0, 0, width, height);
			dots.forEach((dot) => {
				if (Math.abs(dot.dx - dot.x) < shapeSize/2 
					&& Math.abs(dot.dy - dot.y) < shapeSize/2 && Math.abs(dot.dz - dot.z) < shapeSize/2) {
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
			
			requestAnimationFrame(this.start.bind(this))
		}
	}
}

function dotInit(type, dots, width, height) {
	if (type === 'polymerize') {
		// dot init
		dots.forEach((dot, idx) => {
			dot.x = Math.random() * width;
			dot.y = Math.random() * height;
			dot.z = Math.random() * FOCAL_LENGTH * 2;
		});
	} else {	// volatilize
		dots.forEach((dot, idx) => {
			dot.dx = Math.random() * width;
			dot.dy = Math.random() * height;
			dot.dz = Math.random() * FOCAL_LENGTH * 2;
		});
	}

	return dots;
}