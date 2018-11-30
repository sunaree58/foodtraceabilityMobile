import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NetworkProvider } from '../../providers/network/network';
import { CropdataPage } from '../cropdata/cropdata';
import { CropdataProvider } from '../../providers/cropdata/cropdata';





/**
 * Generated class for the CropdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cropdetail',
  templateUrl: 'cropdetail.html',
})
export class CropdetailPage {

  responseTxt: any;
  record_id : any;
  
  constructor(public networks:CropdataProvider,public navCtrl: NavController, public navParams: NavParams, public network:NetworkProvider,public alert:AlertController) {
    this.record_id = navParams.get('id');
  }

  ionViewDidLoad() {
    
    
     
    //this.crop_id =this.crop_id;
    
    console.log('ionViewDidLoad CropdetailPage');
  }

  savedetail(myDate,c1,c2,c3,c4,c5){
    console.log("มามั้ย",this.record_id)
    this.network.cropdetail(myDate,c1,c2,c3,c4,c5,this.record_id).then(data =>{
      console.log("I Received :" + JSON.stringify(data));

      //this.responseTxt = ""+ JSON.stringify(data);
      console.log("recor_id",data);
      const confirm =this.alert.create({
        title: 'บันทึกสำเร็จ',
        buttons:[{
          text:'ตกลง',
          handler:()=>{}
        }]

      });
      confirm.present();
      this.navCtrl.push(CropdataPage,{id:this.record_id}); //ส่ง record_id กลับไปหน้า CropdataPage
    });
  }

  

  cencel()
  {
    this.navCtrl.push(CropdataPage,{id:this.record_id});
  }


}
