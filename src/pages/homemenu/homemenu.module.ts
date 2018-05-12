import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { HomeMenuPage } from './homemenu';

@NgModule({
  declarations: [
    HomeMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeMenuPage),
    TranslateModule.forChild()
  ],
  exports: [
    HomeMenuPage
  ]
})
export class HomePageModule { }
