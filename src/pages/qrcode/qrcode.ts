import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { EmailComposer } from '@ionic-native/email-composer';
import { CropdataProvider } from '../../providers/cropdata/cropdata';



/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {
 
  qrData : any;    //"http://10.94.23.76/api/qrcode.php?record_id=";
  createdCode: null;
  scannedCode = null;
  subject='';
  body='';
  to='';

  qrdata : any;
  recode_id : number;
  

  constructor(public networks:CropdataProvider,private emailcomposer: EmailComposer,public navCtrl: NavController, public navParams: NavParams) {
      this.createCode 
      this.recode_id = navParams.get('id');
      this.qrData = "http://192.168.43.80/api/qrcode.php?record_id="+this.recode_id;
  }

  ionViewDidLoad() {
     //this.createdCode = this.qrData;
    // console.log('ionViewDidLoad QrcodePage',this.createdCode);
  }

  createCode(){
  
    this.createdCode = this.qrData; 
    console.log('ionViewDidLoad QrcodePage', this.qrData);

    
   
 }
 
//  scanCode(){
//    this.barcodeScanner.scan().then(barcodeData=>{
//      this.scannedCode = barcodeData.text;
//    })

// }
sendemail(){ //ส่ง qr code ไปทางอีเมล์
 let email ={
   to:this.to,
   cc:[],
   bcc:[],
   attachments:[ this.createdCode ],
   subject: this.subject,
   body: this.body,
   isHtml:true,
   app:"Gmail"
 
  }
    
   this.emailcomposer.open(email);
   
 }
}
