var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoHistoryPage } from './videohistory';
var ServicesPageModule = /** @class */ (function () {
    function ServicesPageModule() {
    }
    ServicesPageModule = __decorate([
        NgModule({
            declarations: [
                VideoHistoryPage,
            ],
            imports: [
                IonicPageModule.forChild(VideoHistoryPage),
                TranslateModule.forChild()
            ],
            exports: [
                VideoHistoryPage
            ]
        })
    ], ServicesPageModule);
    return ServicesPageModule;
}());
export { ServicesPageModule };
//# sourceMappingURL=videohistory.module.js.map