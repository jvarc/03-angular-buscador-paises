import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { PaisService } from '../../services/pais.service';
import { PaisInterface, Translation } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: [ '../../../app.component.css'
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: PaisInterface[];
  traducciones: Translation[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorCodigo( id )),
        tap(console.log)
      )
      .subscribe(pais => {
        this.pais = pais;
        this.traducciones = Object.values(this.pais[0].translations);
        console.log(pais);
      });


      //El sigueinte codigo hace exactamento lo mismo que el codigo de arriba

    /*this.activatedRoute.params
      .subscribe(({id}) =>{
        this.paisService.getPaisPorCodigo(id);

        this.paisService.getPaisPorCodigo(id)
          .subscribe(pais => {
            console.log(pais);
          })
      })*/
  }

}
