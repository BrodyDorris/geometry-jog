import { Player } from "../game-objects/player";

export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "game" });
    }
    
        preload() {
            //this will get called by phaseer 
            //automaticly when the scene loads
    }

    create() {
        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;

        //set background color
        this.cameras.main.setBackgroundColor(0x222222);

        this.player = new Player(this, this.width / 2, this. height / 2);
    }

    update() {
        this.player.update();
    }
}
