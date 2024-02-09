import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-detalle-categoria',
  templateUrl: './modal-detalle-categoria.component.html',
  styleUrls: ['./modal-detalle-categoria.component.scss'],
})
export class ModalDetalleCategoriaComponent  implements OnInit {
  @Input() categoria: any  // este un dato de tipo entrada y tiene que realizar unas importaciones
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { 
    console.log('Categoria seleccionada ' , this.categoria);
  }

  cerrarModal() {
    return this.modalCtrl.dismiss();
  }
}
