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
import { MainPage, VideoHistory } from '../pages';
var HomeMenuPage = /** @class */ (function () {
    function HomeMenuPage(navCtrl, user, toastCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.studentslist = [];
    }
    HomeMenuPage.prototype.ngOnInit = function () {
        this.studentId = '19004AC4B027';
    };
    HomeMenuPage.prototype.home = function () {
        this.navCtrl.push(MainPage);
    };
    // Attempt to login in through our User service
    HomeMenuPage.prototype.videoHistory = function () {
        this.navCtrl.push(VideoHistory);
    };
    HomeMenuPage.prototype.busLocation = function () {
        //this.navCtrl.push(BusLocation);
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
    };
    HomeMenuPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-homemenu',
            templateUrl: 'homemenu.html'
        }),
        __metadata("design:paramtypes", [NavController,
            User,
            ToastController,
            TranslateService])
    ], HomeMenuPage);
    return HomeMenuPage;
}());
export { HomeMenuPage };
//# sourceMappingURL=homemenu.js.map