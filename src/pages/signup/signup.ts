import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgModel } from '@angular/forms';

import { User } from '../../providers/providers';
import { MainPage, AddChild, FirstRunPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'Nitin',
    password: '123456'
  };
  parent:any; 
  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
  addchild(){
    this.navCtrl.push(AddChild);
  }
  loginPage() {
      this.navCtrl.push(FirstRunPage);
  }
  showToast(message){
    let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'top'
      });
      toast.present();
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  signup(form){
    //console.log(form.value);
    Object.keys(form.value).forEach((key) => (form.value[key] == null || form.value[key] == "") && delete form.value[key]);
    if(Object.keys(form.value).length != 6){
      this.showToast("Please fill all values.");
      return;
    }
    if(form.value.password !== form.value.cpassword){
      this.showToast("Your password and confirmation password do not match.");
      return;
    }
    if(isNaN(form.value.mobilenumber)){
      this.showToast("Mobile number must be number.");
      return;
    }
    if(form.value.mobilenumber.length !== 10){
      this.showToast("Mobile number must be 10 digits.");
      return;
    }
    if(!this.validateEmail(form.value.emailid)){
     this.showToast("Invalid email id.");
      return; 
    }
    this.user.signup(form.value).subscribe((resp) => {
      if (resp['status'] == 'fails') {
        let toast = this.toastCtrl.create({
          message: resp['message'],
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
      if (resp['status'] == 'success') {
        let toast = this.toastCtrl.create({
          message: resp['message'],
          duration: 3000,
          position: 'top'
        });
        toast.present();
        this.navCtrl.push(FirstRunPage);
      }

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
  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      console.log(resp);
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
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
