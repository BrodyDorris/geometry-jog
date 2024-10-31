////@ts-check
export class Player extends Phaser.GameObjects.Rectangle {
    constructor(GameScene, x, y) {
        super(GameScene, x, y, 32, 32, 0xffffff);

        //set origin to middle of rectangle
        this.setOrigin(0.5);

        //add ourself to the scene
        this.scene.add.existing(this);

        //tell physics about us
        this.scene.physics.add.existing(this);
        this.body.collideWorldBounds = true;

        //set our inital scale
        this.setScale(1);
    }
}
