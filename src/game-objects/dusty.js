import { HEIGHT, WIDTH } from "../constants";
import { Player } from "./player";


export class Dust extends Phaser.GameObjects.Rectangle {
	constructor(scene) {
		super(scene, WIDTH / 4, HEIGHT, 10, 10, 0xffffff, 0.09);

        this.scene.add.existing(this);
		
		let scale = 1 / Phaser.Math.Between(0.01, 0.1);
		this.setScale(scale);

		this.tween = this.scene.tweens.add({
			targets: this,
			x: { from: WIDTH / 4, to: -100 },
			y: {from: HEIGHT, to: HEIGHT / 8 * 7.5},
			duration: 1000,
			onComplete: () => {
				this.destroy();
			},
		});
	}
}