export class modelCalcolatrice {
    initialValue: number;
    currentValue: number;
    tipoOperazione: OperazioneEnum
    totalValue: number;

  
}


export enum OperazioneEnum {
    PIU = "+",
    MENO = "-",
    DIV = "÷",
    MOLT = "*"
}