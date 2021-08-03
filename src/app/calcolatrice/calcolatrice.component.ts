import { Component, OnInit } from '@angular/core';
import { modelCalcolatrice, OperazioneEnum } from '../model/modelCalcolatrice';

@Component({
  selector: 'calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.scss']
})
export class CalcolatriceComponent implements OnInit {


  currentValue: string;
  firstOperand = null
  operator = null
  isNextNumber: boolean = false;
  result: any;
 
  
  
  
 

  constructor() {
    
   }

  ngOnInit() {
    this.currentValue = "0";
    
   

    
  }

  clearAll() {
   this.currentValue = "0";
   this.firstOperand = null;
   this.operator = null;
   this.isNextNumber = false;
  }

  clear() {
    if (this.currentValue != "0") {
    this.currentValue = this.currentValue.slice(0, -1)
    }

    if (this.currentValue === "") {
      this.currentValue = "0";
      this.firstOperand = null;
    }

  }

  addNumber(value: string) {
    if (this.isNextNumber) {
      this.currentValue = value
      this.isNextNumber = false;
       
    } else {
       this.currentValue === '0' ? this.currentValue = value: this.currentValue += value
    }
  }

  private selectOperator(op, secondOp) {
    
     switch(op) {
       case "+": this.firstOperand  += secondOp
         this.result = this.firstOperand
       break;
      
        // if (this.currentValue != "0" && (!this.currentValue.includes("+") && !this.currentValue.includes("-") && !this.currentValue.includes("/") && !this.currentValue.includes("*")))
        //  {
        //    this.currentValue += this.operand 
        //   }
      
       
       case "-": this.firstOperand-= secondOp;
       this.result = this.firstOperand
      //  if (this.currentValue != "0" && (!this.currentValue.includes("+") && !this.currentValue.includes("-") && !this.currentValue.includes("/") && !this.currentValue.includes("*")))
      //  {
      //    this.currentValue += this.operand 
      //   }
  
      break;

       case "/": this.firstOperand /= secondOp;
       this.result = this.firstOperand
      //  if (this.currentValue != "0" && (!this.currentValue.includes("+") && !this.currentValue.includes("-") && this.currentValue.includes("/") && this.currentValue.includes("*")))
      //  {
      //    this.currentValue += this.operand 
      //   }
     
      break;

       case "*": this.firstOperand *= secondOp;
       this.result = this.firstOperand
      //  if (this.currentValue != "0" && (!this.currentValue.includes("+") && !this.currentValue.includes("-") && this.currentValue.includes("/") && this.currentValue.includes("*")))
      //  {
      //    this.currentValue += this.operand 
      //   }
       
       break;

     
     }


  }

  getDecimal() {
    if (this.currentValue != "0" && !this.currentValue.includes(".")) {
      this.currentValue = this.currentValue + ".";
    }
  }

  executeOperation(op) {
    
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentValue)
     
    } else if (this.operator) {
     this.selectOperator(this.operator, Number(this.currentValue))
     
     this.currentValue = String(this.result);

    }
    this.operator = op;
    this.isNextNumber= true;

  }

  getPercentage(value) {
    value = this.firstOperand
    if (this.currentValue != "0" && this.operator && this.firstOperand) {
      let percent = Number(this.currentValue)
      percent = (this.firstOperand * percent) / 100;
      this.currentValue = String(percent)
    }
  }



}
