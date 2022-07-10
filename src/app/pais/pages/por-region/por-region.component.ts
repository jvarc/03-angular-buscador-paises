import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: PaisInterface[] =[];

  constructor( private paisService: PaisService) { }

  activarRegion(region: string){

    //este if verifica si estamos seleccionando la misma region y si es asi no hace nada
    if (region === this.regionActiva) {return;}

    this.regionActiva = region;
    this.paises = [];

    this.paisService.getPaisPorRegion(region).subscribe(
      (resp) => {
        return this.paises = resp;
      }
    );
  }

  getClaseCSS( region: string): string{
    return(region === this.regionActiva)
          ? 'btn btn-primary'
          : 'btn btn-outline-primay';
  }
}
