import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modale-calcolatrice',
  templateUrl: './modale-calcolatrice.component.html',
  styleUrls: ['./modale-calcolatrice.component.scss']
})
export class ModaleCalcolatriceComponent implements OnInit {
  

  @Output() chiudiModalEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(private modalService: BsModalService) {

   }

  ngOnInit() {
  }



   chiudiModaleEvent() {
      this.chiudiModalEvent.emit(false);
   }

}
