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
import { Signup, FirstRunPage } from '../pages';
var AddChildPage = /** @class */ (function () {
    function AddChildPage(navCtrl, user, toastCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.schoolList = ["abc", "def"];
        this.busLocations = [];
        this.busList = [];
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    AddChildPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user.GetSchoolNames().subscribe(function (resp) {
            _this.schoolList = resp;
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    AddChildPage.prototype.getBus = function (schoolname) {
        var _this = this;
        console.log(schoolname);
        this.user.GetBusDetails({ "Name": schoolname }).subscribe(function (resp) {
            _this.busList = resp;
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    AddChildPage.prototype.getStops = function (busname) {
        var _this = this;
        console.log(busname);
        this.user.GetBusRouteDetails({ "Name": busname }).subscribe(function (resp) {
            _this.busLocations = resp;
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    AddChildPage.prototype.newstudentregistration = function (studentObj) {
        var _this = this;
        Object.keys(studentObj.value).forEach(function (key) { return (studentObj.value[key] == null || studentObj.value[key] == "") && delete studentObj.value[key]; });
        if (Object.keys(studentObj.value).length != 4) {
            var toast = this.toastCtrl.create({
                message: "Please fill all values",
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }
        this.user.newstudentregistration(studentObj.value).subscribe(function (resp) {
            var toast = _this.toastCtrl.create({
                message: resp["message"],
                duration: 3000,
                position: 'top'
            });
            toast.present();
            _this.navCtrl.push(FirstRunPage);
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    AddChildPage.prototype.loginPage = function () {
        this.navCtrl.push(FirstRunPage);
    };
    AddChildPage.prototype.signup = function () {
        this.navCtrl.push(Signup);
    };
    AddChildPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-addchild',
            templateUrl: 'addchild.html'
        }),
        __metadata("design:paramtypes", [NavController,
            User,
            ToastController,
            TranslateService])
    ], AddChildPage);
    return AddChildPage;
}());
export { AddChildPage };
//# sourceMappingURL=addchild.js.map