import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SrvPagosService {

  constructor(private http: HttpClient) { }
  AlmacenaData(){

    return this.http.get(`https://fn-fe-evaluacion-personal.azurewebsites.net/api/comprobante`,{
      headers:{
         }
    })
  }
}
