import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CropdataProvider } from '../../providers/cropdata/cropdata';


/**
 * Generated class for the AdminhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminhome',
  templateUrl: 'adminhome.html',
})
export class AdminhomePage {
     admindata : any;
  constructor(public networks:CropdataProvider,public navCtrl: NavController, public navParams: NavParams) {
  // this.admindata = JSON.parse(localStorage.getItem('admin'));
   this.admindata = navParams.get('admin');
  }

  ionViewDidLoad() {
    // this.networks.admindata().then((data:any)=>{
    //   this.admindata = data;
    //   console.log("ข้อมูลแอดมิน",data);
    // })
    console.log('ionViewDidLoad AdminhomePage');
  }

  // load(): void
  // {
    
  // } 

}
