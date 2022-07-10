import { AppComponent } from './../../../app.component';
import { Component, Input} from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['../../../app.component.css'
  ]
})
export class PaisTablaComponent  {

  @Input() paises: PaisInterface[] = []
  constructor() { }


}
