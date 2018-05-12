import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: '<h1>Modal Opened</h1>'
})
export class ModalPage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
  }

  dismiss(data) {
    //this.viewCtrl.dismiss(data);
  }

}