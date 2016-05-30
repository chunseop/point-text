export default function volatilize(options) {
	var {
		shape,	// circle, heart, image, rectangle, triangle
		text
	} = options;

	var canvas = this.canvas;
	var context = this.context;
	var {
		width,
		height
	} = canvas;

	var dots = getImgData(this, shape, text);

	// dot init
	dots.forEach((dot, idx) => {
		dot.x = Math.random() * width;
		dot.y = Math.random() * height;
		dot.z = Math.random() * focalLength * 2;
	});

	var pause = false;

	return {
		start: function() {
			context.clearRect(0, 0, width, height);
			dots.forEach((dot) => {
				if (Math.abs(dot.dx - dot.x) < speedRate && Math.abs(dot.dy - dot.y) < speedRate && Math.abs(dot.dz - dot.z) < speedRate) {
					dot.x = dot.dx;
					dot.y = dot.dy;
					dot.z = dot.dz;
					pause = true;
				} else {
					dot.x = dot.x + (dot.dx - dot.x) * speedRate;
					dot.y = dot.y + (dot.dy - dot.y) * speedRate;
					dot.z = dot.z + (dot.dz - dot.z) * speedRate;
				}

				dot.paint(canvas);
			});

			if (!pause)
				requestAnimationFrame(polymerize)
		}
	}
}

function getImgData(shape, text) {
	var {
		width,
		height
	} = this.canvas;
	var context = this.context;

	this.drawText(context, text);

	var imageData = context.getImageData(0, 0, width, height);
	context.clearRect(0, 0, width, height)

	var dots = [];
	for (var x = 0; x < imageData.width; x += 6) {
		for (var y = 0; y < imageData.height; y += 6) {
			var i = (y * imageData.width + x) * 4;
			if (imageData.data[i] >= 128) {
				var dot = new Circle(x-3, y-3, 0, 3);

				dots.push(dot);
			}
		}
	}

	return dots;
}