import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NetworkProvider } from '../../providers/network/network';
//import { UserregisterProvider } from '../../providers/userregister/userregister';
//import { empty } from 'rxjs/Observer';




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //responseData : any;
  userData:any = {
   name:'',
   lastname:'',
   sex:'',
   address:'',
   vocation:'',
   telephone:'',
   email:'',
   username1:'',
   password1:''
  };
   //= {"name": "","lastname": "","sex": "","address": "","vocation": "","telephone": "","email": "","username1": "","password1": "", };
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ,public network:NetworkProvider, public aler: AlertController ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RegisterPage! 555');
  }

signup(){
  // console.log('log');
  // if(this.userData.name == '' || this.userData.lastname == '' || this.userData.address == '' || this.userData.telephone == '' || this.userData.username1 == '' || this.userData.password1 ){
  //   const confirm =this.alertCtrl.create({
  //     title: 'ไม่สามารถสมาชิกได้',
  //     message: 'กรุณากรอกข้อมูลให้ครบ',
  //     buttons:[{
  //       text:'ตกลง',
  //       handler:()=>{}
  //     },{
  //       text:'ยกเลิก',
  //       handler:()=>{}
  //     }]

  //   });
  //   confirm.present();
    
  //   return;
  // }
 // name,lastname,sex,address,vocation,telephone,email,username1,password1
    this.network.registerdata(this.userData).then(data =>{
      
      if(data == null){
        
        const confirm =this.alertCtrl.create({
          title: 'ไม่สามารถสมาชิกได้',
          message: 'กรุณากรอกข้อมูลให้ครบ',
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

  const confirm =this.alertCtrl.create({
    title: 'สมัครสมาชิกสำเร็จ',
   
    buttons:[{
      text:'ตกลง',
      handler:()=>{}
    },{
      text:'ยกเลิก',
      handler:()=>{}
    }]

  });
  confirm.present();
 // console.log(data);
  this.navCtrl.push(LoginPage);

    })

    
  } 

}
