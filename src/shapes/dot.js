export const FOCAL_LENGTH = 250;
export class Dot {
	constructor(centerX, centerY, centerZ, radius) {
		this.dx = centerX;	// destination dot
		this.dy = centerY;
		this.dz = centerZ;
		this.tx = 0;
		this.ty = 0;
		this.tz = 0;
		this.x = 0;
		this.y = 0;
		this.z = 0;
		this.radius = radius;
	}

	draw(canvas) {
		
	}
}