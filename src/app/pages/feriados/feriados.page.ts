import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FeriadosService } from '../../services/feriado.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  
usuarios: any;
  constructor(private menuController: MenuController, 
    private alertController: AlertController,
    private feriadosService: FeriadosService) { }

  ngOnInit() {
    this.feriadosService.getTopHeadLines().subscribe(resp => {
      console.log('usuario', resp);
      this.usuarios=resp;
    
    })
  }

  mostrarMenu()
  {
    this.menuController.open('first')
  }
  async Despedida() {
    const alert = await this.alertController.create({
      header: '¡Hasta luego!',
      message: 'Ha cerrado existosamente la Sesion',
      buttons: ['OK']
    });

    await alert.present();
  }

}