import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VegetablePage } from './vegetable';

@NgModule({
  declarations: [
    VegetablePage,
  ],
  imports: [
    IonicPageModule.forChild(VegetablePage),
  ],
})
export class VegetablePageModule {}
