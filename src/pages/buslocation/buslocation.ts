import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage, VideoHistory, FirstRunPage } from '../pages';
declare var google;
@IonicPage()
@Component({
  selector: 'page-buslocation',
  templateUrl: 'buslocation.html'
})
export class BusLocationPage implements OnInit{
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  lat:string = "18.460452";
  long:string = "73.825308";
  busObj:any;
  userId:string;
  constructor(public navCtrl: NavController, public user: User,  public toastCtrl: ToastController) {
  }
  ngOnInit() {
    this.userId = this.user.userId;
   }
  getBuslocation(){

    this.user.buslocation({"Name":this.userId}).subscribe((resp) => {
      this.busObj = resp;
      this.loadMap(this.busObj[0].Current_Position);
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: err,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  ionViewDidLoad(){
    this.getBuslocation();
  }
  home(){
     this.navCtrl.push(MainPage);
  }
  logout(){
     this.navCtrl.push(FirstRunPage);
  }
  loadMap(latlong){
    if(latlong){
      this.lat = latlong.split(",")[0];
      this.long = latlong.split(",")[1];
    }
    let latLng = new google.maps.LatLng(this.lat, this.long);
    let mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


    var marker = new google.maps.Marker({
      position: latLng,
      title: 'Hello World!',
      icon: { url : 'assets/img/bus_icon.png' }
    });
    marker.setMap(this.map);
 
  }
}
