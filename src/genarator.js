import { Cloud } from "./game-objects/cloud";

export class Generator {
	constructor(scene) {
		this.scene = scene;

		// call the init method after 2 seconds
		this.scene.time.delayedCall(2000, () => this.init(), undefined, this);
	}

	init() {
		console.log("Generator init");
		this.generateCloud();
	}

	generateCloud() {
		new Cloud(this.scene);
		this.scene.time.delayedCall(
			Phaser.Math.Between(2000, 3000),
			() => this.generateCloud(),
			undefined,
			this
		);
	}
}