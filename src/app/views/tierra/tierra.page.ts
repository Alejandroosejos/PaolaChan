import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-tierra',
  templateUrl: './tierra.page.html',
  styleUrls: ['./tierra.page.scss'],
})
export class TierraPage implements OnInit {

  constructor(private menu: MenuController) {}

  openMenu() {

    this.menu.open();
  }


  ngOnInit() {
  }

}
