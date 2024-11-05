import { WIDTH } from "../constants";

export class Cloud extends Phaser.GameObjects.Rectangle {
    constructor(scene) {
        super(scene, WIDTH, Phaser.Math.Between(0,100), 98, 32, 0xffffff, 0.8);

        //let y = Phaser.Math.Between(0,100);
        //this.y = y;
        
        let scale = 1 / Phaser.Math.Between(1,3);
        this.setScale(scale);

        this.tweens = this.scene.tweens.add({
            targets: this,
            x: {from: WIDTH, to: -100},
            duration: 2000 / this.scale,
            onComplete: () => {
                this.destroy();
            },
        });

    }
}
