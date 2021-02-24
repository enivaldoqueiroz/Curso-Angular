import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  //http

  constructor() { }
  
  //Passando as informaçoes para o serviço
  getCursos(){
    return ['Java', 'Ext JS', 'Angular'];
  }
}
