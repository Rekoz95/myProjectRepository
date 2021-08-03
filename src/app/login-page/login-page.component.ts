import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ModelUser } from '../modelUser';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  dataUser: ModelUser = new ModelUser()
  errorMessageBlank = "il campo non puo essere vuoto"
  @Output() flgBack: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  ngOnInit() {
  }

  tornaIndietro() {
    this.flgBack.emit(false)
    this.router.navigate(["Registrazione"])
  }

}
