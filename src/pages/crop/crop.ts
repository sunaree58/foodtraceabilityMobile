import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { AuthService } from '../../providers/auth-service/auth-service';
import { RecordPage } from '../record/record';
import { NetworkProvider } from '../../providers/network/network';
//import { FormGroup, Validators, FormBuilder } from '@angular/forms';





/**
 * Generated class for the CropPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crop',
  templateUrl: 'crop.html',
})
export class CropPage {
  //  trantdata : any ={
  //   vegetable : '',
  //   breed : '',
  //   standard : '',
  //   tran : '',
  //   tablewah :''
  //  }
 
  response: any;
  //cropdata : any;
  standard : any;
  breed: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public network:NetworkProvider) {
    //this.cropdata = JSON.parse(localStorage.getItem('crop'));
  }

  ionViewDidLoad() {

    this.standard = '-';
    this.breed = '-';
    
    console.log('ionViewDidLoad CropPage');
  }

  

  add(vegetable,breed,standard,tran,tablewah)
  {
   
   this.network.addcropdata(vegetable,breed,standard,tran,tablewah).then(data =>{
   // this.network.addcropdata(this.trantdata).then(data =>{
      console.log("อะไรอ่ะ :" + JSON.stringify(data));
      //this.cropdata = data;
     // console.log(this.cropdata);
     // this.responseTxt = ""+ JSON.stringify(data);
      //localStorage.setItem('crop', JSON.stringify(data));
      console.log(data);
      const alert = this.alertCtrl.create({
        title: 'บันทึกสำเร็จ',
        buttons:['ตกลง']
      });
      alert.present();
      this.navCtrl.push(RecordPage);
    });
    
  }     
    
  }
