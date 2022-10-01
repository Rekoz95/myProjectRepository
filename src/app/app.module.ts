import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterModuleComponent } from './register-module/register-module.component';
import { PageUserRegisterComponent} from './page-user-register/page-user-register.component'
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app/app-routing-module';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule }   from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ServiceService} from '../app/service.service'


@NgModule({
  declarations: [
    AppComponent,
    RegisterModuleComponent,
    PageUserRegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: RegisterModuleComponent 
      },
      {
        path:"pagina-utente",
        component: PageUserRegisterComponent
      },
  
    ])
      
    
    
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/', }],
  bootstrap: [AppComponent]
})
export class AppModule { }
