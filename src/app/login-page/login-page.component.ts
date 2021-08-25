import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { ModelUser } from '../modelUser';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  dataUser: ModelUser = new ModelUser()
  dataUsers: Array<ModelUser> = new Array<ModelUser>()
  errorMessageBlank = "il campo non puo essere vuoto"
  errorMessageNotExist = "il nome utente non appartiene a nessun utente registrato"
  hidePassword: boolean = true;
  userNotExist: boolean = false;
  @Output() flgBack: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() showUser: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() loginUserEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }

  tornaIndietro() {
    this.flgBack.emit(false)
    this.router.navigate(["Registrazione"])
  }
   

  loginUser() {
  this.service.getUser().subscribe( 
    (result) => {
  
      result.filter(element => { 
        if (element.username === this.dataUser.username && element.password === this.dataUser.password) {
          this.dataUser = element
          this.showUser.emit(true)
          this.loginUserEvent.emit(this.dataUser)
          this.router.navigate(["Utente"])

        } else {
          this.userNotExist = true;

        }
      })
     
    },

    (error) => {
      error = JSON.stringify(error)
      console.log( "Errore: "+error)
    }
  )
  }

  showHidePassword() {
    this.hidePassword = !this.hidePassword
   }
 
 
}
