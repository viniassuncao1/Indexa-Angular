import { Component, signal } from '@angular/core';
import { Container } from "./componente/container/container";
import { CommonModule } from '@angular/common';
import { Cabecalho } from './componente/cabecalho/cabecalho';
import { Separador } from "./componente/separador/separador";
import { RouterOutlet } from '@angular/router';
import { Contato } from './componente/contato/contato';

@Component({
  selector: 'app-root',
  imports: [
    Container,
    RouterOutlet,
    CommonModule,
    Cabecalho,
    Separador,
    Contato
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'; 
}
