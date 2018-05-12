import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { BusLocationPage } from './buslocation';

@NgModule({
  declarations: [
    BusLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(BusLocationPage),
    TranslateModule.forChild()
  ],
  exports: [
    BusLocationPage
  ]
})
export class BusLocationPageModule { }
