import { Component } from '@angular/core';
import { NavController, App, NavParams, AlertController } from 'ionic-angular';
import { CropdataProvider } from '../../providers/cropdata/cropdata';
//import { Http } from '@angular/http';
//import { UserregisterProvider } from '../../providers/userregister/userregister';
//import { NetworkProvider } from '../../providers/network/network';





@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  //public items : Array<any> =[];
 // responseTxt: any;
  userdata : any;
  // memData:any = {
  //   name:'',
  //   lastname:'',
  //   sex:'',
  //   address:'',
  //   vocation:'',
  //   telephone:'',
  //   email:'',
  //  };
  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public app:App, public networks:CropdataProvider, public navParams: NavParams) {
    this.userdata = JSON.parse(localStorage.getItem('user'))[0];
   // this.UserS = navParams.get('Users');
  //console.log("userLogin:",this.userdata)
   
   //const data = JSON.parse(localStorage.getItem('userData'));
  // this.userDetails = data.userData;
   //this.userPostData.id = this.userDetails.id;

  }




  /*  */// ionViewDidLoad() {

    // console.log(localStorage.getItem('user'));
    
    //this.load();
    
    //console.log('ionViewDidLoad RecordPage');
   
    // this.networks.memberdata().then((data)=>{
    //   console.log("xxx", data);
    //   this.userdata  = data;
    //  // this.userdata = this.UserS;
    // });
 // }

  load(): void
  {
    this.networks.memberdata().then((data:any)=>{
      this.userdata = data;
      console.log("DATA",data);
    })
  }    /* */

  memeberUpdate(name,lastname,address,telephone,email){
    let mem_id = JSON.parse(localStorage.getItem('user'))[0].mem_id;
    this.networks.updatemember(name,lastname,address,telephone,email,mem_id).then(data =>{
      console.log("I Received :" + JSON.stringify(data) );
     // this.responseTxt = ""+ JSON.stringify(data);
     const confirm =this.alertCtrl.create({
      title: 'แก้ไขข้อมูลสำเร็จ',
      buttons:[{
        text:'ตกลง',
        handler:()=>{}
      },]
  
    });
    confirm.present();
    this.navCtrl.push(AboutPage);
    })
   
  }

  logout(){
    localStorage.removeItem('user');
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}
