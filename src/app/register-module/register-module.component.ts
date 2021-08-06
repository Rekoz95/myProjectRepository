import { Component, OnInit, NgModule, EventEmitter, Output, TemplateRef } from '@angular/core';
import {ModelUser} from 'src/app/modelUser'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';





@Component({
  selector: 'register-module',
  templateUrl: './register-module.component.html',
  styleUrls: ['./register-module.component.scss']
})
export class RegisterModuleComponent implements OnInit {

  dataUser: ModelUser = new ModelUser();
  datausers: Array<ModelUser> = new Array<ModelUser>()
  hidePassword: boolean = true;
  hideRepPassword: boolean = true;
  errorMessagePassword: boolean = false;
  errorMessageBlank = "il campo non puo essere vuoto"
  errorMessageEmail = "Email non valida. riprovare"
  errorPasswordNotEqual = "La password non corrisponde. riprovare"
  errorPasswordInvalid = "Password non valida, la password deve essere di 8 cratteri minimo, e deve contenere una lettera maiuscola ed un numero"
  disabledConferma = true;
  flgCheck: boolean = false;
  flgEmailErrata: boolean = false;
  flgPasswordErrata: boolean = false;
  flgPasswordErrataInvalid: boolean = false;
  regExp= "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
  controlliChecked: boolean = false;
  
  

   @Output() eventUsername: EventEmitter<any> = new EventEmitter<any>();
   @Output() flgEventModal: EventEmitter<any> = new EventEmitter<any>();
   @Output() flgEventLogin: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor(private route: Router, private service: ServiceService) { }

  ngOnInit() {

   
  }

  ngOnChange() {
   
  }


  registraUtente() {
    
       this.controlliForm()
       if (this.controlliChecked) {
       this.service.newUser(this.dataUser).subscribe(
         (result) => {
           
           
            this.dataUser = result
            this.datausers.push(result)
            this.eventUsername.emit(result.username)
            this.flgEventModal.emit(true)
            this.route.navigate(["Utente"])
           
         },
        
         (error) => {
           error = JSON.stringify("Errore durante l inserimento"+error)
         }
        
       )

       
        }
       
     }

  


  controlliForm() {
    if (!!this.dataUser) {

      if (!this.dataUser.email.includes("@") || !this.dataUser.email.includes("mail") || !this.dataUser.email.includes(".com" || ".it") ) {
         this.flgEmailErrata = true;
         this.controlliChecked= false
         
      } else {
        this.flgEmailErrata = false;
        this.controlliChecked= true;
      } 
     if (!this.dataUser.password.includes(this.regExp) || !this.dataUser.repPassword.includes(this.regExp)) {
      this.flgPasswordErrataInvalid = true;
      this.controlliChecked= false;

     } else {

      this.flgPasswordErrataInvalid = false;
      this.controlliChecked= true;
    }
      if (this.dataUser.repPassword !== this.dataUser.password) {
        this.flgPasswordErrata = true;
        this.controlliChecked= false;
        
      } else {
        this.flgPasswordErrata = false;
        this.controlliChecked= true;
      }
  }
  return this.controlliChecked
}

  showHidePassword() {
   this.hidePassword = !this.hidePassword
  }

  showHideRepPassword() {
    this.hideRepPassword = !this.hideRepPassword
  }

  checkBoxChecked() {
    this.flgCheck = true;
    this.dataUser.flgChecked = this.flgCheck;
  }

  goToLoginPage() {
    this.flgEventLogin.emit(true)
    this.route.navigate(["Login"])
  }
  

  

}
