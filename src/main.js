////@ts-check
import './css/style.css'
import Phaser from 'phaser';

/** @type {Phaser.Types.Core.GameConfig } */
const config = {
    width: 600,
    height: 300,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    parent: "app",
};

const game = new Phaser.Game(config);
