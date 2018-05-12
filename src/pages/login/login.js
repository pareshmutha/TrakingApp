var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../providers/providers';
import { Signup, HomeMenu } from '../pages';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, user, toastCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            username: 'Nitin',
            password: '123456'
        };
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(Signup);
    };
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function (loginForm) {
        this.navCtrl.push(HomeMenu);
        return;
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
        // Object.keys(loginForm.value).forEach((key) => (loginForm.value[key] == null || loginForm.value[key] == "") && delete loginForm.value[key]);
        // if(Object.keys(loginForm.value).length != 2){
        //   let toast = this.toastCtrl.create({
        //     message: "Please fill all values.",
        //     duration: 3000,
        //     position: 'top'
        //   });
        //   toast.present();
        //   return;
        // }
        // this.user.login(loginForm.value).subscribe((resp) => {
        //   this.user.setStudents(resp)
        //   this.navCtrl.push(MainPage);
        // }, (err) => {
        //   // Unable to log in
        //   let toast = this.toastCtrl.create({
        //     message: this.loginErrorString,
        //     duration: 3000,
        //     position: 'top'
        //   });
        //   toast.present();
        // });
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [NavController,
            User,
            ToastController,
            TranslateService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map