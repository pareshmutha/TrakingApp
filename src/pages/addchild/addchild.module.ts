import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AddChildPage } from './addchild';

@NgModule({
  declarations: [
    AddChildPage,
  ],
  imports: [
    IonicPageModule.forChild(AddChildPage),
    TranslateModule.forChild()
  ],
  exports: [
    AddChildPage
  ]
})
export class AddChildPageModule { }
