import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CropdataProvider } from '../../providers/cropdata/cropdata';

/**
 * Generated class for the Veg4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-veg4',
  templateUrl: 'veg4.html',
})
export class Veg4Page {

  showVeg4:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public networks:CropdataProvider) {
  }

  ionViewDidLoad() {
    this.networks.showveg4().then(data=>{
      this.showVeg4 = data;
      console.log("VVVVV",this.showVeg4);
      
    })
    console.log('ionViewDidLoad Veg4Page');
  }

}
