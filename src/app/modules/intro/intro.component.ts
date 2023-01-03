import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  welcome: boolean = false;
  text: string = '';
  textWelcome: string = 'Hola bienvenido'
  char: string = '';
  invertColors: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hellouCat(){
    this.welcome = true;
    this.invertColors = !this.invertColors;


  }

  //Crear función que invierta colores de toda la web, o solo el blanco al negro



}
