import { Injectable } from '@angular/core';
import { Contatos } from '../componente/contato/contatos';
import { Contato } from '../componente/contato/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contatos[] = [
    { id: 1, "nome": 'Ana Maria', "telefone": '123456789', "email": "vinicius@gmail.com"}
  ]

  constructor() {
    //Tentar obter os dados do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage =  contatosLocalStorageString 
    ? JSON.parse(contatosLocalStorageString) 
    : null;

    this.contatos = contatosLocalStorage || null;
    //Salvar os contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));

  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato: Contatos) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}