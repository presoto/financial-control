import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarteiraComponent } from './carteira/carteira.component';
import { PassivosComponent } from './passivos/passivos.component';
import { AtivosComponent } from './ativos/ativos.component';
import { HistoricoComponent } from './historico/historico.component';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CarteiraComponent,
    PassivosComponent,
    AtivosComponent,
    HistoricoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
