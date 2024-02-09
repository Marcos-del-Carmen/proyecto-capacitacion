import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  constructor(private _http: HttpClient) { }
  
  obtenerProductos(): Observable<any> {
    return this._http.get('https://api.escuelajs.co/api/v1/products'); // La url de la API
  }

  obetenerProductoById(id: number) {
    return this._http.get(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
}
