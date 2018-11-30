import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CropdataProvider } from '../../providers/cropdata/cropdata';

/**
 * Generated class for the Veg3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-veg3',
  templateUrl: 'veg3.html',
})
export class Veg3Page {

  showVeg3 : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public networks:CropdataProvider) {
  }

  ionViewDidLoad() {
    this.networks.showveg3().then(data=>{
      this.showVeg3 = data;
      //this.Veg1 = this.showVeg1.veg_id;

      console.log("VVVVV",this.showVeg3);
      
    })
    console.log('ionViewDidLoad Veg3Page');
  }

}
