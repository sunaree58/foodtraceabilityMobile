import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NetworkProvider } from '../../providers/network/network';
import { AdminhomePage } from '../adminhome/adminhome';



/**
 * Generated class for the AdminloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminlogin',
  templateUrl: 'adminlogin.html',
})
export class AdminloginPage {
    
  
  aminlogin : any = {
  
    username:'',
    password:''
  };

  constructor(public network:NetworkProvider ,public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminloginPage');
  }

  Login(){

    if(this.aminlogin.username == '' || this.aminlogin.password == ''){
      const confirm =this.alertCtrl.create({
        title: 'ไม่สามารถเข้าสู่ระบบได้',
        message: 'กรุณากรอก ชื่อผู้ใช้ และรหัสผ่าน',
        buttons:[{
          text:'ตกลง',
          handler:()=>{}
        },{
          text:'ยกเลิก',
          handler:()=>{}
        }]
  
      });
      confirm.present();
      
      return;
    }

    this.network.loginadmin(this.aminlogin).then(data =>{
      console.log("I Received :" + JSON.stringify(data));
      //this.respons = ""+ JSON.stringify(data);
      if(data == null){
        const confirm =this.alertCtrl.create({
          title: 'ไม่สามารถเข้าสู่ระบบได้',
          message: 'ชื่อผู้ใช้ และ รหัสผ่านไม่ถูกต้อง',
          buttons:[{
            text:'ตกลง',
            handler:()=>{}
          },{
            text:'ยกเลิก',
            handler:()=>{}
          }]

        });
        confirm.present();
      }
       else 
          {
           // localStorage.setItem('user', JSON.stringify(data));
            if(data.status == '2')
             this.navCtrl.push(AdminhomePage);
          }
    })

  }

}
