import { Component} from '@angular/core';

import { PaisInterface } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: PaisInterface[] = [];

  //inyeccion del servicio creado
  constructor(private paisService: PaisService) { }



  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino).subscribe(
      (resp) => {
        console.log(resp[0])
        return this.paises = resp;
      },
      (err) =>{
        this.hayError = true;
        this.paises = []

      }
     )
  }

}
