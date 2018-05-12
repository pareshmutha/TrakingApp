import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage, VideoHistory, HomeMenu, FirstRunPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  // Our translated text strings
  private loginErrorString: string;
  public studentslist:any = [];
  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
  ngOnInit() {
    this.studentslist = this.user.students.Students;
  }
  logout(){
     this.navCtrl.push(FirstRunPage);
  }
  routeToPage(pageRef,studenId){
    this.user.setCurrentUserId(studenId);

    if(pageRef==='HomeMenu'){
     this.navCtrl.push(HomeMenu);
    }
   
    
  }
}
