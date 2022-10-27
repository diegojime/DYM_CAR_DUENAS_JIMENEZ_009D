import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ServicedatosService } from '../../services/conductor.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-usuario1',
  templateUrl: './usuario1.page.html',
  styleUrls: ['./usuario1.page.scss'],
})
export class Usuario1Page implements OnInit {


  constructor(private menuController: MenuController,
    private serviceDatos: ServicedatosService,
    private toastController: ToastController,
    private alertController: AlertController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  
  async Despedida() {
    const alert = await this.alertController.create({
      header: '¡Hasta luego!',
      message: 'Ha cerrado existosamente la Sesion',
      buttons: ['OK']
    });

    await alert.present();
  }
  async showToast(msg){ //mensaje bottom bienvenido
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    })
    await toast.present();
    
  }
}
