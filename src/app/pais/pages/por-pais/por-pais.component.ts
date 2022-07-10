import { Component, Output} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]

})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: PaisInterface[] = [];
  paisesSugeridos: PaisInterface[] = [];
  mostrarSugerencias: boolean = false;

  //inyeccion del servicio creado
  constructor(private paisService: PaisService) { }



  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino).subscribe(
      (resp) => {
        return this.paises = resp;
      },
      (err) =>{
        this.hayError = true;
        this.paises = []

      }
     )
  }

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais( termino)
      .subscribe( paises => this.paisesSugeridos = paises.splice(0.5),
      (err) => this.paisesSugeridos = []
    )
  }

  buscarSugerido( termino: string){
    this.buscar(termino);
    this.mostrarSugerencias = false;
    }


}
