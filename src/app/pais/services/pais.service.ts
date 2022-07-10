import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaisInterface } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';


  //inyeccion del modulo http
  constructor(private http: HttpClient) { }

  //parametros de las busquedas http
  get httpParams(){
    return  new HttpParams().set('fields', 'name,capital,flags,cca2,population' );
  }

  buscarPais( termino: string): Observable<PaisInterface[]>{

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<PaisInterface[]>(url, {params: this.httpParams});

  }

  buscarCapital( termino: string): Observable<PaisInterface[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<PaisInterface[]>(url, {params: this.httpParams});
  }

  getPaisPorCodigo( id: string): Observable<PaisInterface>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<PaisInterface>(url);
  }


  getPaisPorRegion( region: string): Observable<PaisInterface[]>{

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<PaisInterface[]>(url, {params: this.httpParams});


    //otra forma de hacer lo mismo de arriba, eso sino creamos el metodo get httpParams

    /*const url = `${this.apiUrl}/region/${region}?fields=name,capital,flags,cca2,population`;
    return this.http.get<PaisInterface[]>(url);*/

  }

}
