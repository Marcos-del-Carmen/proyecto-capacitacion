import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { ModalController } from '@ionic/angular';
import { ModalDetalleUsuarioComponent } from '../components/modal-detalle-usuario/modal-detalle-usuario.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {
  listaUsuarios: any[] = [];

  constructor(private _usuariosService: UsuariosService, private modalCtrl: ModalController) {} 

  ngOnInit():void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuariosService.obtenerUsuarios().subscribe({
      next: (value) => {
        this.listaUsuarios = value
        console.log(value);
      }, 
      error: (err) => {
        console.log(err);
      }, 
      complete: () => {
        
      }
    })
  }

  async abrirModalDetalle(item: any) {
    const modal = await this.modalCtrl.create({
      component: ModalDetalleUsuarioComponent, // hacemos referencia al componente
      componentProps: { // se indica que en componente categoria se resibe un parametro para obtener todo
        usuario: item
      }
    });
    modal.present();
  } // este metodo nos ayuda para abir el modal que estamos creando como componente para mostrar informacion de un usuario usuario
}
