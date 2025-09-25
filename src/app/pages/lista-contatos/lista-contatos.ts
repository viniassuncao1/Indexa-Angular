import { Component, OnInit } from '@angular/core'; // Adicione OnInit
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Container } from '../../componente/container/container';
import { Cabecalho } from '../../componente/cabecalho/cabecalho';
import { Separador } from '../../componente/separador/separador';
import { ContatoService } from '../../services/contato';
import { Contato } from "../../componente/contato/contato";
import { Contatos } from "../../componente/contato/contatos";


@Component({
  selector: 'app-lista-contatos',
  imports: [
    CommonModule,
    Container,
    Cabecalho,
    Separador,
    FormsModule,
    RouterLink,
    Contato,
    
],
  templateUrl: './lista-contatos.html',
  styleUrl: './lista-contatos.css'
})



export class ListaContatos implements OnInit { // Implementa OnInit
  alfabeto: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  agenda: Contatos[] = [];
  filtroPorTexto: string = '';

constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.agenda = this.contatoService.obterContatos();
  }

  // Remove os acentos de uma string
  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

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
