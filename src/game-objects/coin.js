import { HEIGHT, WIDTH } from "../constants";
export class Coin extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(
            scene, 
            WIDTH + 50,
             Phaser.Math.Between(HEIGHT - 32, HEIGHT - 100), 
             "coin"
        );

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.body.setAllowGravity(false);

        this.scene.tweens.add({
            targets: this,
            x: {from: WIDTH + 50, to: -100},
            duration: 2000,onComplete: () => this.destroy(),
        });

        this.play({ key: "coin", repeat: -1 });
    }
}
