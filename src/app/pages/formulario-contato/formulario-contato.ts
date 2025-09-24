import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Container } from '../../componente/container/container';
import { Separador } from '../../componente/separador/separador';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
export class FormularioContato {

  contatoForm: FormGroup;

  constructor(){
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
    if (!this.contatoForm.valid) {
      console.log(this.contatoForm.value)

    }
  }

  botaoCancelar() {
    console.log("Subimissão canecalada")
  }
}
