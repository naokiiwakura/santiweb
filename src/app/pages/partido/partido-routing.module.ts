import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoComponent } from './partido.component';
import { Routes, RouterModule } from '@angular/router';
import { PartidoListarComponent } from './partido-listar/partido-listar.component';
import { PartidoCadastrarComponent } from './partido-cadastrar/partido-cadastrar.component';
import { PartidoEditarComponent } from './partido-editar/partido-editar.component';



const routes: Routes = [{
  path: '',
  component: PartidoComponent,
  children: [
    {
      path: 'listar',
      component: PartidoListarComponent,
    },
    {
      path: 'cadastrar',
      component: PartidoCadastrarComponent,
    },
    {
      path: 'editar',
      component: PartidoEditarComponent,
    },
  ],
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartidoRoutingModule { }
