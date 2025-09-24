import { Routes } from '@angular/router';
import { FormularioContato } from './pages/formulario-contato/formulario-contato';
import { ListaContatos } from './pages/lista-contatos/lista-contatos';

export const routes: Routes = [
    {
        path: 'lista-contatos', 
        component: ListaContatos
    },

    {
        path: 'formulario', 
        component: FormularioContato
    },

    {
        path: '', 
        redirectTo: '/lista-contatos',
        pathMatch: 'full'
    },


];
