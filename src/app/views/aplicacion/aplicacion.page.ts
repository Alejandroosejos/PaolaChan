import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.page.html',
  styleUrls: ['./aplicacion.page.scss'],
})
export class AplicacionPage implements OnInit {

  constructor(private menu: MenuController) {}

  openMenu() {

    this.menu.open();
  }

  ngOnInit(): void {
  }


}
