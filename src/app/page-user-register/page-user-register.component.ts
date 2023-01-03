import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ModelUser } from '../modelUser';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'page-user-register',
  templateUrl: './page-user-register.component.html',
  styleUrls: ['./page-user-register.component.scss']
})
export class PageUserRegisterComponent implements OnInit {

 
 userObject: ModelUser | undefined;

  constructor(private route: Router, private activedRoute: ActivatedRoute) {
    this.activedRoute.params.subscribe( params => {
       
      this.userObject = params
    })
   }

  ngOnInit() {
    console.log(this.userObject)
  }

  tornaIndietro() {
   
   this.route.navigate([""])
  }

}
