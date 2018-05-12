import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage, VideoHistory, BusLocation, FirstRunPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-homemenu',
  templateUrl: 'homemenu.html'
})
export class HomeMenuPage implements OnInit{
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  
  // Our translated text strings
  private loginErrorString: string;
  public studentslist:any = [];
  public studentId:string;
  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

  }
  ngOnInit() {
  
  }

  home(){
     this.navCtrl.push(MainPage);
  }
  logout(){
     this.navCtrl.push(FirstRunPage);
  }
  videoHistory(){
     this.navCtrl.push(VideoHistory);
  }
  busLocation() {
    return;
  }
  currentLocation() {
     this.navCtrl.push(BusLocation);
     return;
    /*this.user.buslocation({'Name':this.studentId}).subscribe((resp) => {
      console.log(resp);
      //this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });*/
  }
}
