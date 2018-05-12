import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage, FirstRunPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-videohistory',
  templateUrl: 'videohistory.html'
})
export class VideoHistoryPage implements OnInit {
  
  Camera1selected: string = 'selected';
  private ErrorString: string;
  Camera2selected: string = '';
  initVideo: string = '';
  cameraVideoList:any = [];
  private userId:string = '';
  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

     
  }
  initLoadVideo(){
    if(this.cameraVideoList[0].VideoUrl){
      this.initVideo = this.cameraVideoList[0].VideoUrl;
      this.playVideo(this.initVideo);
    }
  }
  ngOnInit() {
    this.userId = this.user.userId;
    this.camera1();
  }
  camera1(){
    this.user.GetCam1Data({"Name":this.userId}).subscribe((resp) => {
      this.Camera1selected = 'selected';
      this.Camera2selected = '';
      this.cameraVideoList = resp || [];
      this.initLoadVideo();  
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.ErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  camera2(){
    this.user.GetCam2Data({"Name":this.userId}).subscribe((resp) => {
      this.Camera2selected = 'selected';
      this.Camera1selected = '';
      this.cameraVideoList = resp || [];
      this.initLoadVideo();
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.ErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  
  }
  home(){
      document.getElementsByTagName("video")[0].remove()
      this.navCtrl.push(MainPage);
  }
  logout(){
     document.getElementsByTagName("video")[0].remove()
     this.navCtrl.push(FirstRunPage);
  }
  playVideo(src){
    var vid = document.getElementById('videoTag');
    vid.setAttribute("src", src);
    vid.setAttribute("controls", "controls");
    vid.setAttribute("autoplay", "true");
  }
}
