import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CropPage } from '../crop/crop';
//import { CropdetailPage } from '../cropdetail/cropdetail';
import { CropdataPage } from '../cropdata/cropdata';

import { HttpClient } from '@angular/common/http';

import { CropdataProvider } from '../../providers/cropdata/cropdata';
import { UpdatecropPage } from '../updatecrop/updatecrop';
//import { ShowlistrecorpPage } from '../showlistrecorp/showlistrecorp';
import { QrcodePage } from '../qrcode/qrcode';







/**
 * Generated class for the RecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {

 
  cropdata : any;
  recode_id :number;
  //cropData : any;
  responseTxt: any;

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public networks:CropdataProvider) {
   
    this.recode_id = navParams.get('id');
    
  }

  ionViewDidLoad(){
      this.getData();
  }

  getData(){
    let mem_id = JSON.parse(localStorage.getItem('user'))[0].mem_id;
    this.networks.getCrop(mem_id).then(data=>{
    //this.cropdata = ""+ JSON.stringify(data);
    console.log("ข้อมูลแปรงหรอ",data);
    
    //this.cropData = this.cropdata;
    this.cropdata = data;
    console.log(this.cropdata);
  })
  }

  addEntry(){
    this.navCtrl.push(CropPage);
  }

  addcrop(id){ //คลิกบันทึกกิจจกรม จะส่งค่า record_id ไปด้วย
    console.log("แปรงที่",id);

    this.navCtrl.push(CropdataPage, {id:id});
  }
  updatecrop(id){ //id = record_id
    console.log("อะไรอ่ะ",id);
    this.navCtrl.push(UpdatecropPage, {id:id});
  }

  deletcrop(id){
    let confirm = this.alertCtrl.create({ 
      title: 'ยืนยันการลบ',
      message: 'คุณต้องการลบข้อมูลนี้?',
      buttons: [
        {
          text: 'ตกลง',
          handler: () => {
            this.networks.deletecrop(id).then(data =>{ //ลบแปลงเพาะปลูก
              console.log("I Received :" + JSON.stringify(data) );
              //this.responseTxt = ""+ JSON.stringify(data);
              this.navCtrl.push(RecordPage);
            })
            //console.log("งงค่ะ",id);
            this.getData();  
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ยกเลิก',
          handler: () => {
            this.navCtrl.push(RecordPage);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  
    //this.navCtrl.push(RecordPage, {id:id}); 
  }

  // seecrop(id){
  //   console.log("รหัสแปลง",id)
  //  this.navCtrl.push(ShowlistrecorpPage, {id:this.recode_id});
  // }

  Qrcode(id){
    this.navCtrl.push(QrcodePage,{id:id});
  }
}
