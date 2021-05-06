import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: string = 'abc';

  pessoa: any = {
    nome: 'Enivaldo',
    idade: 25,
    end: {
      rua: 'Rua 12',
      bairro: 'Vista bela Hall'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
