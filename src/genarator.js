import { Cloud } from "./game-objects/cloud";

export class Genarator {
    constructor(scene) {
        this.scene = scene;

        //call the init method after 2 seconds
        this.scene.time.delayedCall(2000, () => this.init(), undefined, this);
    }

    init() {
        console.log("generator init");
        this.genarateCloud();
    }

    genarateCloud() {
        new Cloud(this.scene);
        this.scene.time.delayedCall(
            Phaser.Math.Between(200,3000),
            () => this.genarateCloud(),
            undefined,
            this
        );
    }
}