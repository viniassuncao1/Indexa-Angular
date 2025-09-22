import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Container } from '../../componente/container/container';
import { Separador } from '../../componente/separador/separador';

@Component({
  selector: 'app-formulario-contato',
  imports: [
    CommonModule,
    Container,
    Separador

  ],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css'
})
export class FormularioContato {

}
