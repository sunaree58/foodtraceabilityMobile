import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { CropdataPage } from '../cropdata/cropdata';



/**
 * Generated class for the ExpensesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html',
})
export class ExpensesPage {
  numberA;
  numberB;
  crop_id:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.crop_id = navParams.get('id');
  }

  ionViewDidLoad() {
    this.crop_id = this.crop_id;
    console.log('ionViewDidLoad ExpensesPage',this.crop_id);
  }

  // // calculate(type){
  // //   var a = parseInt(this.numberA);
  // //   var b = parseInt(this.numberB);
  // //   if( type == 'a'){

  // //     alert(b-a)
  // //   }
  //   //this.navCtrl.push(ExpensesPage);
  // }

}
