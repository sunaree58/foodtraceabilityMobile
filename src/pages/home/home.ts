import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
//import { LoginPage } from '../login/login';
//import { AuthService } from '../../providers/auth-service/auth-service';
import { RecordPage } from '../record/record';
//import { IncomePage } from '../income/income';
//import { PricePage } from '../price/price';
import { VegetablePage } from '../vegetable/vegetable';
import { CalendarPage } from '../calendar/calendar';
import { QrcodePage } from '../qrcode/qrcode';
//import { ContactPage } from '../contact/contact';
import { Price1Page } from '../price1/price1';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController, public app: App) {

  
  }
  

  record(){
    this.navCtrl.push(RecordPage);
  }

  price(){
    this.navCtrl.push(Price1Page);
  }

  vegetable(){
    this.navCtrl.push(VegetablePage);
  }
 
  // income(){
  //   this.navCtrl.push(IncomePage);
  // }

  calendar(){
    this.navCtrl.push(CalendarPage);
  }

  qr(){
    this.navCtrl.push(QrcodePage);
  }

}
