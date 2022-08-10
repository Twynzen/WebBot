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

  constructor() { }

  ngOnInit(): void {
  }

  hellouCat(){
    this.welcome = true;

  }



}
