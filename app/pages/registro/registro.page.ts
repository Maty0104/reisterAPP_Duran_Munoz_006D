import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController, 
              private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  
  //método que envía un saludo
  async Registroini() {
    const alert = await this.alertController.create({
      header: 'Registrado exitosamente:',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
