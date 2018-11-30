import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CropdataProvider } from '../../providers/cropdata/cropdata';


/**
 * Generated class for the Veg5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-veg5',
  templateUrl: 'veg5.html',
})
export class Veg5Page {

  showVeg5: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public networks:CropdataProvider) {
  }

  ionViewDidLoad() {
    this.networks.showveg5().then(data=>{
      this.showVeg5 = data;
      //this.Veg1 = this.showVeg1.veg_id;

      console.log("VVVVV",this.showVeg5);
      
    })
    
  }

}
