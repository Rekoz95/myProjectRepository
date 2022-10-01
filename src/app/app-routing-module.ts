import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageUserRegisterComponent } from './page-user-register/page-user-register.component';
import { RegisterModuleComponent } from './register-module/register-module.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }