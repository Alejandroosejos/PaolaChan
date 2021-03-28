import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.page.html',
  styleUrls: ['./cultivo.page.scss'],
})
export class CultivoPage implements OnInit {

  constructor(private menu: MenuController) {}

  openMenu() {

    this.menu.open();
  }


  ngOnInit() {
  }

}
