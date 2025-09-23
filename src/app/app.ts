import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Importando seus componentes (assumindo que os caminhos estão corretos)
import { Container } from "./componente/container/container";
import { Cabecalho } from './componente/cabecalho/cabecalho';
import { Separador } from "./componente/separador/separador";
import { Contato } from './componente/contato/contato';
import { Footer } from './componente/footer/footer';
import { FormularioContato } from './pages/formulario-contato/formulario-contato';

// Importando os dados da agenda
import agenda from './agenda.json';

// Interface para tipar os objetos de contato
interface Contatos {
  id: number;
  nome: string;
  telefone: string;
}

@Component({
  selector: 'app-root',
  standalone: true, // Adicionado para componentes standalone
  imports: [
    Container,
    RouterOutlet,
    CommonModule,
    Cabecalho,
    Separador,
    Contato,
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
  filtroPorTexto: string = '';

  /**
   * Normaliza um texto: remove acentos e o converte para letras minúsculas.
   * @param texto O texto a ser normalizado.
   * @returns O texto sem acentos e em minúsculas.
   */
  private normalizar(texto: string): string {
    if (!texto) return '';
    return texto
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  /**
   * Filtra a lista de contatos com base no texto digitado.
   * A comparação ignora acentos e diferenças entre maiúsculas/minúsculas.
   */
  filtrarContatosPorTexto(): Contatos[] {
    // CORREÇÃO: Verifica se a string de filtro está vazia, não a função.
    if (!this.filtroPorTexto.trim()) {
      return this.agenda;
    }

    const filtroNormalizado = this.normalizar(this.filtroPorTexto);

    return this.agenda.filter(contato => {
      // CORREÇÃO: Normaliza o nome do contato antes de comparar.
      const nomeNormalizado = this.normalizar(contato.nome);
      return nomeNormalizado.includes(filtroNormalizado);
    });
  }

  /**
   * Filtra os contatos por uma letra específica, já considerando o filtro de texto.
   * A comparação ignora acentos.
   * @param letra A letra inicial para filtrar os contatos.
   */
  filtrarContatosPorLetra(letra: string): Contatos[] {
    const letraNormalizada = this.normalizar(letra);

    return this.filtrarContatosPorTexto().filter(contato => {
      // CORREÇÃO: Normaliza o nome do contato para a comparação com 'startsWith'.
      const nomeNormalizado = this.normalizar(contato.nome);
      return nomeNormalizado.startsWith(letraNormalizada);
    });
  }
}