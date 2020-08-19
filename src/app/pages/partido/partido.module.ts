import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import {
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbActionsModule,
  NbUserModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbSelectModule,
  NbIconModule,
  } from '@nebular/theme';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { PartidoComponent } from './partido.component';
import { PartidoRoutingModule } from './partido-routing.module';
import { PartidoEditarComponent } from './partido-editar/partido-editar.component';
import { PartidoListarComponent } from './partido-listar/partido-listar.component';
import { PartidoCadastrarComponent } from './partido-cadastrar/partido-cadastrar.component';

@NgModule({
  declarations: [
    PartidoComponent,
    PartidoListarComponent,
    PartidoCadastrarComponent,
    PartidoEditarComponent,
    PartidoEditarComponent,
    PartidoListarComponent,
    PartidoCadastrarComponent,
  ],
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbCardModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    PartidoRoutingModule,
  ],
})
export class PartidoModule { }
