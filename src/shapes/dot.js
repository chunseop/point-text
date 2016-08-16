export const FOCAL_LENGTH = 250;
export class Dot {
	constructor(centerX, centerY, centerZ, radius) {
		this.dx = centerX;	// destination x
		this.dy = centerY;
		this.dz = centerZ;
		this.x = 0;	// Math.random() * canvas.width
		this.y = 0;	// Math.random() * canvas.height
		this.z = 0;	// Math.random() * FOCAL_LENGTH * 2
		this.radius = radius;
	}

	draw(canvas) {
		
	}
}