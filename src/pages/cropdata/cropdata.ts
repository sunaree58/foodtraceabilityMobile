import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CropdetailPage } from '../cropdetail/cropdetail';
import { CropdataProvider } from '../../providers/cropdata/cropdata';
//import { ExpensesPage } from '../expenses/expenses';
import { UpdatedetailPage } from '../updatedetail/updatedetail';
//import { map } from 'rxjs/operators';







/**
 * Generated class for the CropdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cropdata',
  templateUrl: 'cropdata.html',
})
export class CropdataPage {

  cropdetailData: any;
  record_id:number;
  
  crop_id: any;
  sum: number=0;
  sum_revenue: number=0;
  
  

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public networks:CropdataProvider) {
    this.record_id = navParams.get('id');
    this.crop_id = navParams.get('crop'); //รับค่า crop_id มาเก็บไว้ใน this.crop_id
  
  }

  ionViewDidLoad() {
    
    this.networks.getcropdetail(this.record_id).then(data=>{
      //this.cropdata = ""+ JSON.stringify(data);
    
     
      
      console.log(data);
     // this.cropdetail = this.record_id;
     
      console.log('มันคืออะไรอ่ะ',this.record_id);
      this.cropdetailData = data;

      for(let i=0; i<this.cropdetailData.length; i++){ //วนลูป sumของจค่าใช้่าย
        console.log("GGG",this.cropdetailData[i].expenses *1)
       
        this.sum += this.cropdetailData[i].expenses *1;

      }

      for(let i=0; i<this.cropdetailData.length; i++){ //วนLoop Sum หารายได้ของการขายผลผลิต
        console.log("EEE",this.cropdetailData[i].revenue *1)
       
        this.sum_revenue += this.cropdetailData[i].revenue *1;

      }
      
      this.crop_id = data;
      console.log("RecordID",this.crop_id);

      
      
    })

}

addcrop2(){
  console.log('มันคืออะไรนะ');
    this.navCtrl.push(CropdetailPage, {id: this.record_id}); //เพิ่มกิจกกรรมการเพาะปลูก
  }

  // expenses(crop_id){
  //   this.navCtrl.push(ExpensesPage,{crop:crop_id}); //คำนวณต้นทุนของแลงเพาะปลูก
  // }

  editcrop(crop){
    this.navCtrl.push(UpdatedetailPage,{crop:crop}); //แก้ไขกิจกกรมการเพาะปลูก ส่งข้อมูลแปลงเพาะปลูกไปหน้าUpdatedetailPage
  }

  decrop(crop_id){

    let confirm = this.alertCtrl.create({ 
      title: 'ยืนยันการลบ',
      message: 'คุณต้องการลบข้อมูลนี้?',
      buttons: [
        {
          text: 'ตกลง',
          handler: () => {
            this.networks.deleteDetail(crop_id).then(data =>{ //ลบกิจกรรมเพาะปลูก
              console.log("I Received :" + JSON.stringify(data) );
              //this.responseTxt = ""+ JSON.stringify(data);
              this.navCtrl.push(CropdataPage,{id:this.record_id});  
              
            })
            //console.log("งงค่ะ",id);
            //this.getData();  
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ยกเลิก',
          handler: () => {
            this.navCtrl.push(CropdataPage,{id:this.record_id});
            console.log('Agree clicked',this.record_id);
          }
        }
      ]
    });
    confirm.present()
  }
  

}
