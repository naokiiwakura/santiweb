import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SantinhoComponent } from './santinho/santinho.component';
import { CandidatoComponent } from './candidato/candidato.component';
import { EstrategiaComponent } from './estrategia/estrategia.component';
import { ColinhaComponent } from './colinha/colinha.component';
import { PartidoModule } from './partido/partido.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    PartidoModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    SantinhoComponent,
    CandidatoComponent,
    EstrategiaComponent,
    ColinhaComponent,
  ],
})
export class PagesModule {
}
