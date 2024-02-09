import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  // getData: [] = [];
  
  // constructor(public _services: GetapiService) {
  //   this._services.getData("").subscribe(data => {
  //     this.getData = data;
  //     console.log(this.getData);
  //   });
  // }
  constructor (private _producosService: ProductosService) { }
  listaProductos: any[] = [];

  ngOnInit(): void {
      this.obtenerProductos();
  }
  obtenerProductos(){
    this._producosService.obtenerProductos().subscribe({
      next: (value) => {
        this.listaProductos = value;
        // console.log(value);
      },
      error: (err) => {
        console.log(err)
      }, 
      complete: ()=>{
        
      }
    });
  }
}
