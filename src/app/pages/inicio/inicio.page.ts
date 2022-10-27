import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import{ AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor(private menuController: MenuController, 
    private alertController: AlertController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
   
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  async Despedida() {

    if(localStorage.getItem('íngresado'))
    {
      localStorage.clear();
    }


    /*
    const alert = await this.alertController.create({
      header: '¡Hasta luego!',
      message: 'Ha cerrado existosamente la Sesion',
      buttons: ['OK']
    });

    await alert.present();*/

  }
  
  
//método que muestra un mensaje con botón Ok

//método que muestra un mensaje con botón Ok
async salir() {
  const alert = await this.alertController.create({
    header: 'Salir',
    message: 'a salido con exito',
    buttons: ['OK'],
  });

  await alert.present();
}
async showLoading() {
  const loading = await this.loadingCtrl.create({
    message: 'Espere un momento...',
    duration: 3000,
  });

  loading.present();
}


}
