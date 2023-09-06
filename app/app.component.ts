import { Component } from '@angular/core';

interface Componente{
  name: string;
  icon: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {}

  componentes : Componente[]=[
    {
      name:'Escanear QR',
      icon: 'camera-outline',
      redirecTo:'/escanear'
    },
    {
      name:'Generar QR',
      icon: 'qr-code-outline',
      redirecTo:'/generar'
    },
    {
      name:'Informacion',
      icon: 'information-circle-outline',
      redirecTo:'/informacion'
    },
    {
      name:'Cerrar sesion',
      icon: 'exit-outline',
      redirecTo:'/'
    },

  ]




}
