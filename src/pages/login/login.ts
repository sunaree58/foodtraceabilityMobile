import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';




//import { AuthService } from '../../providers/auth-service/auth-service';
import { NetworkProvider } from '../../providers/network/network';
import { UserregisterProvider } from '../../providers/userregister/userregister';
import { AdminloginPage } from '../adminlogin/adminlogin';






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  
  userlogin : any = {
  
    username:'',
    password:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public network:NetworkProvider,public userregis:UserregisterProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log('log')

    if(this.userlogin.username == '' || this.userlogin.password == ''){
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
    console.log('in');
    this.network.logindata(this.userlogin).then(data =>{
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
            localStorage.setItem('user', JSON.stringify(data));
            if(data.status == '1')
             this.navCtrl.push(TabsPage);
          }
    })

}

register(){
  this.navCtrl.push(RegisterPage); // show RegisterPage
}

adminLogin(){
  this.navCtrl.push(AdminloginPage);
}

}