import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CropdataProvider } from '../../providers/cropdata/cropdata';


/**
 * Generated class for the Veg6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-veg6',
  templateUrl: 'veg6.html',
})
export class Veg6Page {

  showVeg6:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public networks:CropdataProvider) {
  }

  ionViewDidLoad() {
    this.networks.showveg6().then(data=>{
      this.showVeg6 = data;
      //this.Veg1 = this.showVeg1.veg_id;

      console.log("VVVVV",this.showVeg6);
      
    })
    
  }

}
