import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FooterComponent } from './components/layout/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { Punto2Component } from './components/punto2/punto2/punto2.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { Punto3Component } from './components/punto3/punto3/punto3.component';
//se declaran los componentes que se van a usar a nivel global
//dentro de la aplicacion
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Punto1Component,
    Punto2Component,
    Punto3Component,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
