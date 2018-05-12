var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
var BusLocationPage = /** @class */ (function () {
    function BusLocationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BusLocationPage.prototype.ngOnInit = function () {
        // this.studentId = '19004AC4B027';
        this.loadMap();
    };
    BusLocationPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    BusLocationPage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            position: latLng,
            title: 'Hello World!',
        });
        marker.setMap(this.map);
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], BusLocationPage.prototype, "mapElement", void 0);
    BusLocationPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-buslocation',
            templateUrl: 'buslocation.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], BusLocationPage);
    return BusLocationPage;
}());
export { BusLocationPage };
//# sourceMappingURL=buslocation.js.map