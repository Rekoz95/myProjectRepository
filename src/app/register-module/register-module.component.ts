import { Component, OnInit, NgModule, EventEmitter, Output, TemplateRef } from '@angular/core';
import { ModelUser } from 'src/app/modelUser'
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { TokenStorageService } from '../services/token-storage.service';





@Component({
  selector: 'register-module',
  templateUrl: './register-module.component.html',
  styleUrls: ['./register-module.component.scss']
})
export class RegisterModuleComponent implements OnInit {

  dataUser: ModelUser = {}
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
  pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
  controlliChecked: boolean = false;



  @Output() eventUsername: EventEmitter<any> = new EventEmitter<any>();
  @Output() flgEventModal: EventEmitter<any> = new EventEmitter<any>();
  @Output() flgEventLogin: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor(private route: Router, private service: ServiceService) { }

  registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repPassword: new FormControl('', [Validators.required]),
      flgChecked: new FormControl(false, [Validators.required])


  })

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  ngOnInit(): void {
 
  }


  registraUtente() {
    
    this.controlliForm()
    if (this.controlliChecked) {
      this.service.getUser().subscribe( res => {
        debugger;
        const user = res.find(el => {
          return this.registerForm.get('email').value === el.email 
        })
        if(!user) {
        this.service.register(this.registerForm.value).subscribe(
          (result) => {
            if (result) {
              this.flgEventModal.emit(true)
              this.route.navigate(["pagina-utente", this.registerForm.value])
              console.log(this.registerForm.value)
            }
  
          },
  
          (error) => {
            error = JSON.stringify(error)
            alert("Errore: " + error)
          }
  
        )
        } else {
          alert('Utente gia esistente, effettua il login')
        }
    })

    
      
  
  

    }

  }




  controlliForm() {
    if (this.registerForm) {

      if (this.registerForm.get('email').value.includes('@') || this.registerForm.get('email').value.includes('mail') || this.registerForm.get('email').value.includes('.it' || '.com')) {
        this.flgEmailErrata = false;
        


      } else {
        this.flgEmailErrata = true;
      }
      if ((this.registerForm.get('repPassword').value !== this.registerForm.get('password').value)) {
        this.flgPasswordErrata = true;

      } else {
        this.flgPasswordErrata = false;
      }
      if (this.flgEmailErrata || this.flgPasswordErrata) {
        this.controlliChecked = false;
      }

      else {
        this.controlliChecked = true;
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



  loginUser(email: string, password: string) {
    this.service.getUser().subscribe( res => {
      const user = res.find(el => {
        return email === el.email && password === el.password
      })

      if(user) {
        alert('login avvenuto con successo, utente: ' + user.email)

        this.route.navigate(["pagina-utente", user])
      } else {
        alert('utente non trovato, effettua la registrazione')
      }


    })

   
  }




}
