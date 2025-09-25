import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Container } from '../../componente/container/container';
import { Separador } from '../../componente/separador/separador';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato';

@Component({
  selector: 'app-formulario-contato',
  imports: [
    CommonModule,
    Container,
    Separador,
    ReactiveFormsModule,
    RouterLink
],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css'
})
export class FormularioContato implements OnInit {

  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService, private router: Router) {

  }

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required), 
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }


  salvarContato () {
    const novoContato = this.contatoForm.value;
    this.contatoService.salvarContato(novoContato);
    this.router.navigate(['/lista-contatos']);
  }

  botaoCancelar() {
    console.log("Subimissão canecalada")
  }
}
