import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CropdataPage } from './cropdata';

@NgModule({
  declarations: [
    CropdataPage,
  ],
  imports: [
    IonicPageModule.forChild(CropdataPage),
  ],
})
export class CropdataPageModule {}
