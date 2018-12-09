import { AdicionarComponent } from './adicionar/adicionar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Routes, RouterModule } from '@angular/router';

import {  ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'cadastrousuario', component: FormularioComponent },
    { path: 'novovalor', component: AdicionarComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);