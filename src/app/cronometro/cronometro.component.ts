import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Cronometro} from 'src/modelCronometro'

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss']
})
export class CronometroComponent implements OnInit {
   
  stopwatcher: Cronometro = new Cronometro()
  status: boolean = false;
  interv: any;
 

  constructor() {
   
   }

  ngOnInit() {
    this.stopwatcher.ms= 0
    this.stopwatcher.s = 0
    this.stopwatcher.m = 0
    this.stopwatcher.h = 0;
  }

  ngOnchange() {
    
  }

  startTimer() {
    this.status = true
    this.updateTimer()
    this.interv = setInterval(() => {this.updateTimer()}, 10)
  }

  stopTimer() {
    this.status = false;
    clearInterval(this.interv)
  }

  resetTime() {
    this.status = false;
    clearInterval(this.interv)
    this.stopwatcher.ms= 0
    this.stopwatcher.s = 0
    this.stopwatcher.m = 0
    this.stopwatcher.h = 0;
  }

  updateTimer() {
    if (this.stopwatcher.ms === 60) {
      this.stopwatcher.s++
      this.stopwatcher.ms = 0;
    }
    if(this.stopwatcher.s === 60) {
      this.stopwatcher.m++
      this.stopwatcher.s = 0
    }
    if(this.stopwatcher.m=== 60) {
      this.stopwatcher.h++
      this.stopwatcher.m =0;
    }
    if(this.stopwatcher.h === 60) {
      this.stopwatcher.h++
      this.stopwatcher.m =0;
    }
    this.stopwatcher.ms++
  }

}
