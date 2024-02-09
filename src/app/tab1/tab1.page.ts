import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../service/categorias.service';
import { ModalController } from '@ionic/angular';
import { ModalDetalleCategoriaComponent } from '../components/modal-detalle-categoria/modal-detalle-categoria.component';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  listaCategorias: any[] = [];

  constructor(private _categoriasService: CategoriasService, private modalCtrl: ModalController ){ }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(){
    this._categoriasService.obtenerCategorias().subscribe({
      next: (value) => {
        this.listaCategorias = value;
        console.log(value)
      },
      error: (err) => {
        console.log(err)
      }, 
      complete: ()=>{
        
      }
    });
  }
  
  async abrirModalDetalle(item: any) {
    const modal = await this.modalCtrl.create({
      component: ModalDetalleCategoriaComponent,
      componentProps: { // se indica que en componente categoria se resibe un parametro para obtener todo
        categoria: item
      }
    });
    modal.present();
  }
  
  compartirCategoria(item: any) {
    // console.log('Precionamos el mensaje para compartir');
    Share.share({
      title: item.title,
      text: item.id,
      url: item.image,
    });
  } // este metodo activa el share para enviar algunos valores
  
}