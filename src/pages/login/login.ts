import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage, Signup, HomeMenu } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, password: string } = {
    username: 'Nitin',
    password: '123456'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService ) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
  signup() {
      this.navCtrl.push(Signup);
  }
  // Attempt to login in through our User service
  doLogin(loginForm) {
      //this.navCtrl.push(HomeMenu);
      //return;

    // var obj = {
    //       "Status": "SUCCESSFUL",
    //       "UserID": 1,
    //       "Students": [
    //           {
    //               "StudentName": "Student01",
    //               "StudentID": "12345"
    //           }
    //       ],
    //       "Banner": [
    //           {
    //               "BannerURL": "https://www.amazon.com/"
    //           },
    //           {
    //               "BannerURL": "http://www.flipkart.com/"
    //           }
    //       ]
    //   }
    // this.user.setStudents(obj)
    // this.navCtrl.push(MainPage);
    
    Object.keys(loginForm.value).forEach((key) => (loginForm.value[key] == null || loginForm.value[key] == "") && delete loginForm.value[key]);
    if(Object.keys(loginForm.value).length != 2){
      let toast = this.toastCtrl.create({
        message: "Please fill all values.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
      return;
    }
    
    this.user.login(loginForm.value).subscribe((resp) => {
      this.user.setStudents(resp)
      this.navCtrl.push(MainPage);
    }, (err) => {
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
