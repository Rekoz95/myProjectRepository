import { Component, Output, EventEmitter, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  apriModale: boolean = false;
  modalRef: BsModalRef | null

   constructor( private modalService: BsModalService) {
  
  }
  

  apriCalcolatrice(template : TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md' });
  }

  chiudiModale(event) {
    if (event === false) {
      this.modalRef.hide()
      this.modalRef = null;
    }
     
   }

}







