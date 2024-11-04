export class Cloud extends Phaser.GameObjects.Rectangle {
    constructor(scene, x) {
        super(scene, x, 0, 98, 32, 0xffffff, 0.8);

        let y = Phaser.Math.Between(0,100);
        this.y = y;

        let scale = 1 / Phaser.Math.Between(1,3);
        this.setScale(scale);
    }
}
