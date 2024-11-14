import { HEIGHT, WIDTH } from "../constants";
import { Player } from "../game-objects/player";
import { Generator } from "../genarator";

export class GameScene extends Phaser.Scene {
	constructor() {
		super({ key: "game" });

        this.obsticles;
		this.score = 0;
	}

	preload() {
		// this will get called by phaser
		// automatically when the scene loads

		this.score = 0;
		this.registry.set("score", "0");

		// load font
		this.load.bitmapFont(
			"arcade",
			 "/assets/fonts/arcade.png",
			 "/assets/fonts/arcade.xml"
		);
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

	this.scoreText = this.add.bitmapText(WIDTH / 2,
		 10,
		"arcade",
		this.score,
		20
		);

		this.scoreUpdateEvent = this.time.addEvent({
			delay: 500,
			callback:() => this.updateScore(),
			callbackScope: this,
			loop: true,
		});
	}

	update() {
		this.player.update();
	}

    hitObdtacle(player, obstacle) {
    console.log("player hit");  
	this.scene.start("gameover");
    }

	updateScore(points = 1) {
		this.score += points;
		this.registry.set("score",this.score);
		this.scoreText.setText(this.score);
	}
}
