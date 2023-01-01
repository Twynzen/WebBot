import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { MainScene } from './main-scene.class';

@Component({
  selector: 'app-phaser-test',
  templateUrl: './phaser-test.component.html',
  styleUrls: ['./phaser-test.component.scss']
})
export class PhaserTestComponent implements OnInit {

  phaserGame: Phaser.Game = {} as Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [MainScene],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 }
        }
      }
    };
  }
  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }

}
