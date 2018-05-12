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
import { HomeMenu } from '../pages';
var VideoHistoryPage = /** @class */ (function () {
    function VideoHistoryPage(navCtrl, user, toastCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.Camera1selected = 'selected';
        this.Camera2selected = '';
        this.initVideo = '';
        this.cameraVideoList = [{
                "VideoUrl": "http://www.senapr.com/SchoolBusVideo/0000000065f3a056/Videos_Cam2/0-Nov-18-2017-12-11-00.mp4",
                "VideoName": "Nov-18-2017-12-11-00abc"
            },
            {
                "VideoUrl": "http://www.senapr.com/SchoolBusVideo/0000000065f3a056/Videos_Cam2/0-Nov-18-2017-12-51-15.mp4",
                "VideoName": "Nov-18-2017-12-51-15def"
            }];
        this.userId = '';
        console.log = function (message) {
            document.getElementById('debugDiv').innerHTML += '<p>' + message + '</p>';
        };
        console.error = console.debug = console.info = console.log;
    }
    VideoHistoryPage.prototype.initLoadVideo = function () {
        if (this.cameraVideoList[0].VideoUrl) {
            this.initVideo = this.cameraVideoList[0].VideoUrl;
            this.playVideo(this.initVideo);
        }
    };
    VideoHistoryPage.prototype.ngOnInit = function () {
        this.userId = this.user.userId;
        document.getElementById('videoSpan').innerHTML = '';
        document.getElementById('videoSpan').innerHTML = '<video width="320" controls height="240" id="videoTag"></video>';
        this.camera1();
    };
    VideoHistoryPage.prototype.ngOnDestroy = function () {
        alert("called on destory");
    };
    VideoHistoryPage.prototype.camera1 = function () {
        this.Camera1selected = 'selected';
        this.Camera2selected = '';
        this.initLoadVideo();
        return;
        // this.user.GetCam1Data({"Name":this.userId}).subscribe((resp) => {
        //   this.Camera1selected = 'selected';
        //   this.Camera2selected = '';
        //   this.cameraVideoList = resp || [];
        //   this.initLoadVideo();  
        // }, (err) => {
        //   this.navCtrl.push(MainPage);
        //   // Unable to log in
        //   let toast = this.toastCtrl.create({
        //     message: this.ErrorString,
        //     duration: 3000,
        //     position: 'top'
        //   });
        //   toast.present();
        // });
    };
    VideoHistoryPage.prototype.camera2 = function () {
        this.Camera2selected = 'selected';
        this.Camera1selected = '';
        this.initLoadVideo();
        return;
        // this.user.GetCam2Data({"Name":this.userId}).subscribe((resp) => {
        //   this.Camera2selected = 'selected';
        //   this.Camera1selected = '';
        //   this.cameraVideoList = resp || [];
        //   this.initLoadVideo();
        // }, (err) => {
        //   this.navCtrl.push(MainPage);
        //   // Unable to log in
        //   let toast = this.toastCtrl.create({
        //     message: this.ErrorString,
        //     duration: 3000,
        //     position: 'top'
        //   });
        //   toast.present();
        // });
    };
    VideoHistoryPage.prototype.home = function () {
        document.getElementById('videoSpan').innerHTML = '';
        this.navCtrl.push(HomeMenu);
    };
    VideoHistoryPage.prototype.playVideo = function (src) {
        var vid = document.getElementById('videoTag');
        vid.setAttribute("src", src);
        vid.setAttribute("controls", "controls");
        vid.setAttribute("autoplay", "true");
    };
    VideoHistoryPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-videohistory',
            templateUrl: 'videohistory.html'
        }),
        __metadata("design:paramtypes", [NavController,
            User,
            ToastController,
            TranslateService])
    ], VideoHistoryPage);
    return VideoHistoryPage;
}());
export { VideoHistoryPage };
//# sourceMappingURL=videohistory.js.map