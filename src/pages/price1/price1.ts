import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PricePage } from '../price/price';
import { CropdataProvider } from '../../providers/cropdata/cropdata';
import { Price2Page } from '../price2/price2';




/**
 * Generated class for the Price1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-price1',
  templateUrl: 'price1.html',
})
export class Price1Page {
  
  showprice : any;
  pric1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public networks:CropdataProvider) {
  }

  ionViewDidLoad() {

    //  this.networks.showpriceVeg().then(data=>{
    //   this.showprice = data;
    //   console.log('ราคาผัก',data);
    // })

//แตงกวา
   
  }

  price1(veg_id){ //แตงกวา
    this.navCtrl.push(PricePage,{veg_id:veg_id});
  }

  price2(veg_id){ //มะเขือเทศ
    this.navCtrl.push(Price2Page,{veg_id:veg_id});
  }

  price3(veg_id){ //พริกขี้หนู
    this.navCtrl.push(PricePage,{veg_id:veg_id});
  }

  price4(veg_id){ //พริกชี้ฟ้า
    this.navCtrl.push(PricePage,{veg_id:veg_id});
  }

  price5(veg_id){ //ผักชีไทย
    this.navCtrl.push(PricePage,{veg_id:veg_id});
  }

  price6(veg_id){ //กะหล่ำปลี
    this.navCtrl.push(PricePage,{veg_id:veg_id});
  }

  price7(veg_id){ //ผักกาดขาว
    this.navCtrl.push(PricePage,{veg_id:veg_id});
  }

  price8(veg_id){ //ผักชีฝรั่ง
    this.navCtrl.push(PricePage,{veg_id:veg_id});
  }

  price9(veg_id){ //มันฝรั่ง
    this.navCtrl.push(PricePage,{veg_id:veg_id});
  }

}
