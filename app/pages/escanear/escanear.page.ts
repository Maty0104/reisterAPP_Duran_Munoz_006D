import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {

  constructor(private alertController: AlertController, 
  private menuController: MenuController) { }


  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }


  async Permisos() {
    const alert = await this.alertController.create({
      header: 'Desea conceder permisos para acceder a la camara',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',

        },
        {
          text: 'Cancelar',
          role: 'confirm',
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }


}
