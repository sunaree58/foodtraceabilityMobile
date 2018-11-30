import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CropdataProvider } from '../../providers/cropdata/cropdata';

/**
 * Generated class for the Veg9Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-veg9',
  templateUrl: 'veg9.html',
})
export class Veg9Page {

  showVeg9:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public networks:CropdataProvider) {
  }

  ionViewDidLoad() {

    this.networks.showveg9().then(data=>{
      this.showVeg9 = data;
      //this.Veg1 = this.showVeg1.veg_id;

      console.log("VVVVV",this.showVeg9);
      
    })
   
  }

}
