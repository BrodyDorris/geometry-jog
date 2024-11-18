import { WIDTH } from "../constants";
import { Player } from "./player";


export class Dust extends Phaser.GameObjects.Rectangle {
	constructor(scene) {
		super(scene, WIDTH, Phaser.Math.Between(0, 100), 98, 32, 0xffffff, 0.5);

        this.scene.add.existing(this);
		
		let scale = 0.5 / Phaser.Math.Between(1, 3);
		this.setScale(scale);

		this.tween = this.scene.tweens.add({
			targets: this,
			x: { from: Player.x, to: -100 },
			duration: 2000 / this.scale,
			onComplete: () => {
				this.destroy();
			},
		});

		console.log("Dust constructor", this);
	}
}