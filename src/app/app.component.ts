import { Component, EventEmitter  } from '@angular/core';
import {ModelUser} from 'src/app/modelUser'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Register';
  
  modelUserEvent: ModelUser = new ModelUser();
  success: boolean = false;
  backEvent: boolean = false;
  loginView: boolean = false;
 

  


  constructor() { }

  getObjectUsername(event) {
    this.modelUserEvent.username = event

  }

  getFlagTrue(event) {
    this.success = event;
  }

  getBackEvent(event) {
   this.success = event
  }

  getFlagLoginTrue(event) {
  this.loginView = event
  }

  getFlgBackEvent(event) {
    this.loginView = event
  }


}





