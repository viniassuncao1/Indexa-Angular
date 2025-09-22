import { Component, signal } from '@angular/core';
import { Container } from "./componente/container/container";
import { CommonModule } from '@angular/common';
import { Cabecalho } from './componente/cabecalho/cabecalho';
import { Separador } from "./componente/separador/separador";
import { RouterOutlet } from '@angular/router';
import { Contato } from './componente/contato/contato';
import { Barraprocura } from './componente/barraprocura/barraprocura';
import { Footer } from './componente/footer/footer';
import { FormsModule } from '@angular/forms';

interface Contatos {
    id: number
    nome: string
    telefone: string
}

import agenda from './agenda.json'
import { FormularioContato } from './pages/formulario-contato/formulario-contato';

@Component({
  selector: 'app-root',
  imports: [
    Container,
    RouterOutlet,
    CommonModule,
    Cabecalho,
    Separador,
    Contato,
    Barraprocura,
    Footer,
    FormsModule,
    FormularioContato
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  alfabeto: string[] = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
  agenda: Contatos[] = agenda;

  filtroPorTexto: string = ''

  filtrarContatosPorTexto (): Contatos[] {
    if (!this.filtrarContatosPorTexto) {
      return this.agenda
    }
    return this.agenda.filter(agenda => {
      return agenda.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    })
  }

  filtrarContatosPorLetra(letra : string) : Contatos[] {
    return this.filtrarContatosPorTexto().filter(contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    })
  }
}
