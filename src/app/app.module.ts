import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterModuleComponent } from './register-module/register-module.component';
import { PageUserRegisterComponent} from './page-user-register/page-user-register.component'
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app/app-routing-module';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterModuleComponent,
    PageUserRegisterComponent,
    LoginPageComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: "Registrazione",
        component: RegisterModuleComponent 
      },
      {
        path:"Utente",
        component: PageUserRegisterComponent
      },
      {
        path:"Login",
        component: LoginPageComponent
      } 
    ])
      
    
    
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
