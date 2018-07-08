import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SesionesComponent } from './sesiones/sesiones.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { AddSesionComponent } from './add-sesion/add-sesion.component';
import { PlacesService } from './places.service';

@NgModule({
  declarations: [
    AppComponent,
    SesionesComponent,
    InicioComponent,
    AddSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
