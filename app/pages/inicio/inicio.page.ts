import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

/*
interface Componente{
  name: string;
  icon: string;
  redirecTo: string;
}*/

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

 

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }



}
