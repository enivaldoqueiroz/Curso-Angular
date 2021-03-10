import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  //Podemos ultilizar desta forma também
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  //Como passar Brodcast vai EventEmitter
  @Output() mudouValor = new EventEmitter();
  // Acessando ao DOM e ao Templete com ViewChild
  @ViewChild('campoInput', { static: true }) campoValorInput: ElementRef;

  incrementa(){
    //this.valor++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    //this.valor--
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
