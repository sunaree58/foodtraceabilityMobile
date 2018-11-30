import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RecordPage } from '../record/record';
import { CropdataProvider } from '../../providers/cropdata/cropdata';




/**
 * Generated class for the UpdatecropPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updatecrop',
  templateUrl: 'updatecrop.html',
})
export class UpdatecropPage {
 
  recode_id :any;
  showrecord:any;
  vegetable : any;
  breed: any;
  standard : any;
  tran : any;
  tablewah : any;


  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public networks: CropdataProvider ) {
    this.recode_id = navParams.get('id');
    
    //this.showrecord = JSON.parse(localStorage.getItem('record'));

  }

  ionViewDidLoad() {
    this.showrecord = this.recode_id;
    this.vegetable = this.recode_id.vegetable;
    this.breed = this.recode_id.breed;
    this.standard = this.recode_id.standard;
    this.tran = this.recode_id.transplant;
    this.tablewah = this.recode_id.tablewah;
    console.log("YYY",this.showrecord);
 
  }

  // load(): void
  // {
  //   //let mem_id = JSON.parse(localStorage.getItem('user'))[0].mem_id;
  //   this.networks.showCropdata(this.recode_id.record_id).then((data:any)=>{
  //     this.showrecord = data;
  //     console.log("Hiii",data);
  //   })
  // }  
  // getdata(){
  //   let mem_id = JSON.parse(localStorage.getItem('user'))[0].mem_id;
  //   this.networks.getCrop(mem_id).then(data=>{
  //   //this.cropdata = ""+ JSON.stringify(data);
  //   console.log("ข้อมูลแปรงหรอ",data);
    
    
  //   this.showrecord = data;
  //   console.log("iooooo",this.showrecord);
  // })
  // }

  updaterecord(vegetable,breed,standard,tran,tablewah){
    this.networks.updeterecord(vegetable,breed,standard,tran,tablewah,this.recode_id.record_id).then(data =>{
      console.log("อิอิ :" + JSON.stringify(data));
      console.log("FGF",this.recode_id);
     //this.responseTxt = ""+ JSON.stringify(data);
     const confirm =this.alertCtrl.create({
      title: 'แก้ไขข้อมูลสำเร็จ',
      buttons:[{
        text:'ตกลง',
        handler:()=>{}
      },]
  
    });
    confirm.present();
    this.navCtrl.push(RecordPage,{id:this.recode_id.record_id});
    })
}

  undaterecord(){
    this.navCtrl.push(RecordPage);
  }
}
