import { HEIGHT, WIDTH } from "../constants";
import { Player } from "../game-objects/player";
import { Generator } from "../genarator";

export class GameScene extends Phaser.Scene {
	constructor() {
		super({ key: "game" });

        this.obsticles;
	}

	preload() {
		// this will get called by phaser
		// automatically when the scene loads
	}

	create() {
		// set background color
		this.cameras.main.setBackgroundColor(0x222222);

		this.obsticles = this.add.group();
        this.generator = new Generator(this);

		this.player = new Player(this, WIDTH / 2, HEIGHT / 2);

        this.physics.add.collider(this.player, 
            this.obsticles, 
            this.hitObdtacle,
        () => {
            return true;
        },
        this
    );
	}

	update() {
		this.player.update();
	}

    hitObdtacle(player, obstacle) {
    console.log("player hit");  
    }
}
