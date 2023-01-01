import Phaser from 'phaser';
export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  create() {
    this.load.image('sky', './assets/img/fonds/sky.png');
    let tes = this.load;
    console.log(tes,"tes");

  }
  preload() {
    this.add.image(400,300, 'sky')
  }
  override update() {
    console.log('update method');
  }
}
