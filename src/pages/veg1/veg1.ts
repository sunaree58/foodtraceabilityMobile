import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CropdataProvider } from '../../providers/cropdata/cropdata';

/**
 * Generated class for the Veg1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-veg1',
  templateUrl: 'veg1.html',
})
export class Veg1Page {
  showVeg1 : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public networks:CropdataProvider) {
  }

  ionViewDidLoad() {
    this.networks.showveg1().then(data=>{
      this.showVeg1 = data;
      //this.Veg1 = this.showVeg1.veg_id;

      console.log("VVVVV",this.showVeg1);
      
    })
  }

}
