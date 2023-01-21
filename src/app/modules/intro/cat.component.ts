import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {
  welcome: boolean = false;
  text: string = '';
  textInWindow: string = 'Bienvenido'
  char: string = '';
  invertColors: boolean = false;
  newText: boolean = false;
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  hellouCat(){
    this.welcome = true;
    // this.invertColors = !this.invertColors;
    this.newText = true;

  }
  nextText(prompt:number){
    this.newText = false;
    setTimeout(() => {
      this.newText = true;
    }, 100);
    switch (prompt+this.count) {
      case 1:
        this.textInWindow = 'Bienvenido';
        this.count += 1;
        break;
      case 2:
        this.textInWindow = "este es el portafolio de";
        this.count += 1;
        break;
      case 3:
        this.textInWindow = "Daniel Castiblanco";
        this.count += 1;
        break;
      case 4:
        this.textInWindow = "Por ahora";
        this.count += 1;
        break;
      case 5:
        this.textInWindow = "la web esta en proceso";
        this.count += 1;
        break;
      case 6:
        this.textInWindow = "visita por el momento";
        this.count += 1;
        break;
      case 7:
        this.textInWindow = "mi perfil de Github";
        this.count += 1;
        break;
      case 8:
        this.textInWindow = "adiós";
        this.count += 1;
        break;
      case 9:
        this.textInWindow = "https://github.com/Twynzen";
        this.count += 1;
        break;
      default:
        this.textInWindow = "Numero no valido";
    }

  }
}
