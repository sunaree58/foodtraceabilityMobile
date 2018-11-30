import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CropdataProvider } from '../../providers/cropdata/cropdata';
import { Veg2Page } from '../veg2/veg2';
import { Veg3Page } from '../veg3/veg3';
import { Veg1Page } from '../veg1/veg1';
import { Veg4Page } from '../veg4/veg4';
import { Veg5Page } from '../veg5/veg5';
import { Veg6Page } from '../veg6/veg6';
import { Veg7Page } from '../veg7/veg7';
import { Veg8Page } from '../veg8/veg8';
import { Veg9Page } from '../veg9/veg9';





/**
 * Generated class for the VegetablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vegetable',
  templateUrl: 'vegetable.html',
})
export class VegetablePage {

  showVeg1 : any;
  Veg1:any;
  veg_name : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public networks:CropdataProvider) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VegetablePage');

   
  }

  vegetabel1(){
    this.navCtrl.push(Veg1Page);
  }

  vegetabel2(){
    this.navCtrl.push(Veg2Page);
  }

  vegetabel3(){
    this.navCtrl.push(Veg3Page);
  }

  vegetabel4(){
    this.navCtrl.push(Veg4Page);
  }

  vegetabel5(){
    this.navCtrl.push(Veg5Page);
  }

  vegetabel6(){
    this.navCtrl.push(Veg6Page);
  }

  vegetabel7(){
    this.navCtrl.push(Veg7Page);
  }

  vegetabel8(){
    this.navCtrl.push(Veg8Page);
  }

  vegetabel9(){
    this.navCtrl.push(Veg9Page);
  }

}
