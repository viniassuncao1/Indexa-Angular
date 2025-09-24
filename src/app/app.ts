import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


import { Footer } from './componente/footer/footer';
import { Header } from './componente/header/header';

@Component({
  selector: 'app-root',
  standalone: true, // Adicionado para componentes standalone
  imports: [
    CommonModule,
    RouterOutlet,
    Footer,
    Header,
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}