import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CropdataProvider } from '../../providers/cropdata/cropdata';


/**
 * Generated class for the Veg8Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-veg8',
  templateUrl: 'veg8.html',
})
export class Veg8Page {

  showVeg8: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public networks:CropdataProvider) {
  }

  ionViewDidLoad() {

    this.networks.showveg8().then(data=>{
      this.showVeg8 = data;
      console.log("VVVVV",this.showVeg8);
      
    })
  }

}
