import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-detalle-usuario',
  templateUrl: './modal-detalle-usuario.component.html',
  styleUrls: ['./modal-detalle-usuario.component.scss'],
})
export class ModalDetalleUsuarioComponent  implements OnInit {
  @Input() usuario: any
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('Usuario seleccinado ', this.usuario)
  }

  cerrarModal() {
    return this.modalCtrl.dismiss();
  }
}
