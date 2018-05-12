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
import { MainPage, AddChild, FirstRunPage } from '../pages';
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, user, toastCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: 'Nitin',
            password: '123456'
        };
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    SignupPage.prototype.addchild = function () {
        this.navCtrl.push(AddChild);
    };
    SignupPage.prototype.loginPage = function () {
        this.navCtrl.push(FirstRunPage);
    };
    SignupPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    SignupPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    SignupPage.prototype.signup = function (form) {
        var _this = this;
        //console.log(form.value);
        Object.keys(form.value).forEach(function (key) { return (form.value[key] == null || form.value[key] == "") && delete form.value[key]; });
        if (Object.keys(form.value).length != 6) {
            this.showToast("Please fill all values.");
            return;
        }
        if (form.value.password !== form.value.cpassword) {
            this.showToast("Your password and confirmation password do not match.");
            return;
        }
        if (isNaN(form.value.mobilenumber)) {
            this.showToast("Mobile number must be number.");
            return;
        }
        if (form.value.mobilenumber.length !== 10) {
            this.showToast("Mobile number must be 10 digits.");
            return;
        }
        if (!this.validateEmail(form.value.emailid)) {
            this.showToast("Invalid email id.");
            return;
        }
        this.user.signup(form.value).subscribe(function (resp) {
            if (resp['status'] == 'fails') {
                var toast = _this.toastCtrl.create({
                    message: resp['message'],
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            if (resp['status'] == 'success') {
                var toast = _this.toastCtrl.create({
                    message: resp['message'],
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.navCtrl.push(FirstRunPage);
            }
        }, function (err) {
            // Unable to log in
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    // Attempt to login in through our User service
    SignupPage.prototype.doLogin = function () {
        var _this = this;
        this.user.login(this.account).subscribe(function (resp) {
            console.log(resp);
            _this.navCtrl.push(MainPage);
        }, function (err) {
            _this.navCtrl.push(MainPage);
            // Unable to log in
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    SignupPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-signup',
            templateUrl: 'signup.html'
        }),
        __metadata("design:paramtypes", [NavController,
            User,
            ToastController,
            TranslateService])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map