import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { VideoHistoryPage } from './videohistory';

@NgModule({
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
export class ServicesPageModule { }
