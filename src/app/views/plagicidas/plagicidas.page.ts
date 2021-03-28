import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-plagicidas',
  templateUrl: './plagicidas.page.html',
  styleUrls: ['./plagicidas.page.scss'],
})
export class PlagicidasPage implements OnInit {

  constructor(private menu: MenuController) {}

  openMenu() {

    this.menu.open();
  }


  ngOnInit() {
  }

}
