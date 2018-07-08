import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionesComponent } from '../app/sesiones/sesiones.component';
import { InicioComponent } from '../app/inicio/inicio.component';
import { AddSesionComponent } from '../app/add-sesion/add-sesion.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'sesiones', component: SesionesComponent },
  { path: 'addsesion', component: AddSesionComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}