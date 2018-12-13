import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormField } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarteiraComponent } from './carteira/carteira.component';
import { PassivosComponent } from './passivos/passivos.component';
import { AtivosComponent } from './ativos/ativos.component';
import { HistoricoComponent } from './historico/historico.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { routing } from './app.routing';
import { NovousuarioComponent } from './novousuario/novousuario.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CarteiraComponent,
    PassivosComponent,
    AtivosComponent,
    HistoricoComponent,
    FormularioComponent,
    AdicionarComponent,
    NovousuarioComponent
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
    MatFormFieldModule,
    MatInputModule,

    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    FormsModule,
    MatDatepickerModule,
    MatSortModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
