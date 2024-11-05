import { HEIGHT, WIDTH } from "../constants";
import { Player } from "../game-objects/player";
import { Genarator } from "../genarator";

export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "game" });
    }
    
        preload() {
            //this will get called by phaseer 
            //automaticly when the scene loads
    }

    create() {
        //set background color
        this.cameras.main.setBackgroundColor(0x222222);

        this.Genarator = new Genarator(this);

        this.player = new Player(this, WIDTH / 2, HEIGHT / 2);
    }

    update() {
        this.player.update();
    }
}
