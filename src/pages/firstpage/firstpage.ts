import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

/**
 * Generated class for the FirstpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firstpage',
  templateUrl: 'firstpage.html',
})
export class FirstpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstpagePage');
  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  signup(){
    this.navCtrl.push(RegisterPage);
  }

}
