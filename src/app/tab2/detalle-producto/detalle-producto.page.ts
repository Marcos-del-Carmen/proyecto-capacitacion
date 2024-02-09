import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  producto: any;
  constructor(private _productoService: ProductosService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe({
      next: (value: any) => {
        // console.log(value);
        this.obtenerDetalleProducto(value.idProducto);
      }
    }
    )
  }

  obtenerDetalleProducto(id: number) {
    this._productoService.obetenerProductoById(id).subscribe({
      next: (value) => {
        console.log(value);
        this.producto = value;
      }
    })
  }
}
