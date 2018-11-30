import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CropdataProvider } from '../../providers/cropdata/cropdata';
import { CropdataPage } from '../cropdata/cropdata';





/**
 * Generated class for the UpdatedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updatedetail',
  templateUrl: 'updatedetail.html',
})
export class UpdatedetailPage {
  
  cropdata : any;
  showdetail :any;
  myDate : any;
  c1:any;
  c2:any;
  c3:any;
  constructor(public networks:CropdataProvider ,public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  
    this.cropdata = navParams.get('crop');
  
  }

  ionViewDidLoad() {
    this.showdetail = this.cropdata;
    this.myDate = this.cropdata.date;
    this.c1 = this.cropdata.plantingactivity;
    this.c2 = this.cropdata.expenses;
    this.c3 = this.cropdata.revenue;


    console.log("ionViewDidLoad UpdatedetailPage",this.showdetail);
  }
  // load(): void
  // {
  //   this.networks.showCropdetail(this.crop_id).then((data:any)=>{
  //     this.showdetail = data;
  //     console.log("ppppp",this.showdetail);
  //   })
  // } 

  Updetail(myDate,c1,c2,c3){
   console.log("UUU",this.cropdata.crop_id);
    this.networks.updetedetail(myDate,c1,c2,c3,this.cropdata.crop_id).then(data =>{
      console.log("bbbb :" + JSON.stringify(data));
      console.log("NAJA",);
    
     //this.responseTxt = ""+ JSON.stringify(data);
     const confirm =this.alertCtrl.create({
      title: 'แก้ไขข้อมูลสำเร็จ',
      buttons:[{
        text:'ตกลง',
        
        handler:()=>{ this.navCtrl.push(CropdataPage,{id:this.cropdata.record_id});console.log("rrrr",this.cropdata.record_id);}
      },]
  
    });
    confirm.present();
   
    })

  }
  

}
