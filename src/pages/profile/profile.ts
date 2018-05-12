import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  
  serviceslist:any[]=[
    {"servicename":"Full Servicing","price":"500"},
    {"servicename":"Oil Change 1lit","price":"300"},
    {"servicename":"Clutch","price":"200"},
    {"servicename":"Break","price":"250"},


  ];
  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    
  }
  home(){
      this.navCtrl.push(MainPage);
  }
 
}
