import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-platform-menu',
  templateUrl: './platform-menu.component.html',
  styleUrls: ['./platform-menu.component.scss']
})
export class PlatformMenuComponent implements AfterViewInit {

  @ViewChild('canvas', { static: false}) canvas: ElementRef = {} as ElementRef;
  public context: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;

  constructor() {
  }
  ngAfterViewInit(): void {
    this.initCanvas();
  }

  initCanvas(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.toPaint();

  }
  toPaint(){
    if (this.context !== null) {
      this.context.fillStyle = '#000';
      this.context.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.context.fillRect(0, 550, 800, 50);

    }
  }

}
