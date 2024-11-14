import { HEIGHT, WIDTH } from "../constants";

export class GameOver extends Phaser.Scene {
    constructor() {
        super({ key: "gameover"});
    }

    create() {
        this.centerWidth = WIDTH / 2;
        this.centerHeight = HEIGHT / 2;

        this.cameras.main.setBackgroundColor(0x111111);

        this.showLine(this.registry.get("score"), 50, 30);
        this.showLine("game over!", this.centerHeight, 45);
        this.showLine("press Enter to restart",HEIGHT - 50, 10);

        this.input.keyboard.on("keydown-ENTER", this.startGame, this);
    }

    showLine(text, y, size) {
        const line = this.add.bitmapText(
            this.centerWidth,y,"arcade", text, size)
            .setOrigin(0.5)
            .setAlpha(0); 

            this.tweens.add({
                targets: line,
                duration: 2000,
                alpha: {from: 0, to: 1},
                repeat: 0,
            });
    }

    startGame() {
        this.scene.start("game");
    }
}
