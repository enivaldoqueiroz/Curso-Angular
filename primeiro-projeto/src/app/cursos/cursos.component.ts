import { Component, OnInit } from '@angular/core';

import { CursosService } from "./cursos.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor(private CursosService: CursosService) {
    this.nomePortal = 'http://loiane.training';
    /*for (let index = 0; index < this.cursos.length; index++) {
      let cursos = this.cursos[index];      
    }*/

    //var servico = new CursosService();

    this.cursos = this.CursosService.getCursos();
   }

  ngOnInit(): void {
  }

}
