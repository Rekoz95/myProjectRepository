import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ModelUser } from '../modelUser';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'page-user-register',
  templateUrl: './page-user-register.component.html',
  styleUrls: ['./page-user-register.component.scss']
})
export class PageUserRegisterComponent implements OnInit {
 @Input() usernameEvent: ModelUser
 @Output() backEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor(private route: Router, private service: ServiceService) { }

  ngOnInit() {
  }

  tornaIndietro() {
   this.backEvent.emit(false)
   this.route.navigate(["Registrazione"])
  }

}
