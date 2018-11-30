import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkProvider {

  //api_url = 'http://192.168.43.80';
  constructor(public http: HttpClient) {
    console.log('Hello NetworkProvider Provider');
  }

//  registerdata(nam,last,se,ad,vot,tel,em,us,pa) : Promise<any>
 registerdata(data) : Promise<any>
  {
    let url = "http://localhost/api/register.php";
    
   // let param = {name:nam, lastname: last, sex: se, address: ad, vocation: vot, telephone: tel,email: em, username1: us, password1: pa};
    let request = this.http.post(url,data);
    return request.toPromise();
  } 


logindata(login) : Promise<any> //เข้าสู่ระบบของผู้ใช้ที่เป็นสมาชิก
{
  let url = "http://localhost/api/login.php";
  //let param = {username: user, password: pass};
  let request = this.http.post(url,login); 

  return request.toPromise(); 
}

loginadmin(aminlogin) : Promise<any> //เข้าสู่ระบบของแอดมิน
{
  let url = "http://localhost/api/adminlogin.php";
  //let param = {username: user, password: pass};
  let request = this.http.post(url,aminlogin); 

  return request.toPromise(); 
}


addcropdata(ve,b,s,tr,w) : Promise<any> 
//addcropdata(trantdata) : Promise<any>
{
  let mem_id = JSON.parse(localStorage.getItem('user'))[0].mem_id;
  let url = "http://localhost/api/crop.php";
  let param = {vegetable: ve, breed: b, standard: s, tran: tr, tablewah: w, mem_id: mem_id};
  let request = this.http.post(url,param); 

  return request.toPromise();
}

cropdetail(c,e,d,k,w,a,record_id ) : Promise<any> //เพิ่มกิจกรรมการเพาะปลูก
{
  //let record_id =  JSON.parse(localStorage.getItem('crop')).record_id;
  let url = "http://localhost/api/cropdatail.php";
  let param = {myDate:c,c1:e,c2:d,c3:k,c4:w,c5:a,record_id:record_id};
  console.log('ok0k');
  let request = this.http.post(url,param); 
  return request.toPromise(); 
}
}
