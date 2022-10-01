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

 
 userObject: ModelUser | undefined;
  constructor(private route: Router, private service: ServiceService) {
    const state = this.route.getCurrentNavigation()?.extras.state
    if (state) {
     
      this.userObject = state.user
    }
   }

  ngOnInit() {
    console.log(this.userObject)
  }

  tornaIndietro() {
   
   this.route.navigate([""])
  }

}
