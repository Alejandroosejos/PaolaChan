import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-insecticidas',
  templateUrl: './insecticidas.page.html',
  styleUrls: ['./insecticidas.page.scss'],
})
export class InsecticidasPage implements OnInit {

  constructor(private menu: MenuController) {}

  openMenu() {

    this.menu.open();
  }

  ngOnInit() {
  }

}
