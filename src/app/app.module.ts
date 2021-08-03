import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { ModaleCalcolatriceComponent } from './modale-calcolatrice/modale-calcolatrice.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CalcolatriceComponent } from './calcolatrice/calcolatrice.component';

@NgModule({
  declarations: [
    AppComponent,
    ModaleCalcolatriceComponent,
    CalcolatriceComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],

  

  
  providers: [ {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
