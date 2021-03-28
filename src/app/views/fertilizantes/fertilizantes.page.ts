import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-fertilizantes',
  templateUrl: './fertilizantes.page.html',
  styleUrls: ['./fertilizantes.page.scss'],
})
export class FertilizantesPage implements OnInit {

  constructor(private menu: MenuController) {}

  openMenu() {

    this.menu.open();
  }


  ngOnInit() {
  }

}
