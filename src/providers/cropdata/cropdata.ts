import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { resolve } from 'path';
//import 'rxjs/add/operator/map';
//import { Http } from '@angular/http';
//import { map } from 'rxjs/operators';
/*
  Generated class for the CropdataProvider provider.

  See https://angular.io/guide/dependency-injection for mor info on providers
  and Angular DI.
*/

@Injectable()
export class CropdataProvider {

 

  constructor(  public http:HttpClient ) {
    console.log('Hello CropdataProvider Provider');
  }

// getCrop(){

//   let url = "http://192.168.43.80/app/crop1.php";
//   let request = this.http.get(url);
//   return request.toPromise()
// }
admindata(){ //แสดงข้อมูลผู้ใช้
  let url = "http://localhost/api/showadmindata.php";
  let request = this.http.get(url);
  return request.toPromise()
  //return this.http.get(url);
}


memberdata(){ //แสดงข้อมูลผู้ใช้
  let url = "http://localhost/api/showmember.php";
  let request = this.http.get(url);
  return request.toPromise()
  //return this.http.get(url);
}

getCrop(mem_id){ //แสดงข้อมูลแปลง
  let url = "http://localhost/api/showcropdata.php?mem_id="+mem_id;
  let request = this.http.get(url);
  return request.toPromise()
}
// showCropdata(id){ //แสดงข้อมูลแปลงที่จะอัพเดพ
//   let url = "http://localhost/api/showcropdata.php?record_id"+id;
//   let request = this.http.get(url);

//   return request.toPromise()
// }

// showCropdetail(crop_id){ //แสดงข้อมูลกิจกรรมที่จะอัพเดพ
//   let url = "http://localhost/api/show_detail.php?crop_id="+crop_id;
//   let request = this.http.get(url);

//   return request.toPromise()
// }

 getcropdetail(id){ //แสดงข้อมูลกิจกรรม
  let url = "http://localhost/api/showcropdetail.php?record_id="+id;
  let request = this.http.get(url);
  console.log("ดูนะ",id);
  return request.toPromise()
 }
 
 updatemember(na,las,adr,tels,mail,mem_id){ //อัพเดพข้อมูลของผู้ใช้
  //let mem_id = JSON.parse(localStorage.getItem('user'))[0].mem_id;
  let url = "http://localhost/api/updatemember.php?mem_id="+mem_id;
  let param = {name:na, lastname: las, address: adr, telephone: tels,email: mail};
  let request = this.http.post(url,param,mem_id);
  return request.toPromise();
}

updeterecord(v,b,t,ta,s,id){ //อัพเดพข้อมูลแปรงเพาะปลูก
 // let mem_id = JSON.parse(localStorage.getItem('user'))[0].mem_id;
  let url = "http://localhost/api/updaterecord.php?record_id="+id;
  let param = {vegetable: v, breed: b, standard: t, tran: ta, tablewah:s};
  let request = this.http.post(url,param);
  console.log("DDDDD",id);
  return request.toPromise()

}

updetedetail(m,c,cc,ccc,crop_id) //แก้ไขกิจกรรมเพาะปลูก
{
  let url = "http://localhost/api/updatedetail.php?crop_id="+crop_id;
  let param = {myDate: m, c1: c, c2: cc, c3: ccc};
  let request = this.http.post(url,param);
  console.log("ห่วยยย",crop_id);
  return request.toPromise();
}

deletecrop(id) //ลบแปรงเพาะปลูก
{
  let url = "http://localhost/api/delete_record.php?record_id="+id;
  let request = this.http.get(url);
  console.log("ห่วยยย",id);
  return request.toPromise();
}

deleteDetail(crop_id) //ลบกิจกรรมเพาะปลูก
{
  let url = "http://localhost/api/deletedetail.php?crop_id="+crop_id;
  let request = this.http.get(url);
  console.log("JJJJJ",crop_id);
  return request.toPromise();
}

showveg1(){
  let url = "http://localhost/api/showvegtabledata.php"; //ดึงข้อมูลผักมาแสดง
  let request = this.http.get(url);
  return request.toPromise();
}

showveg2(){
  let url = "http://localhost/api/showvegetable2.php";
  let request = this.http.get(url);
  return request.toPromise();
}

showveg3(){
  let url = "http://localhost/api/showvegetable3.php";
  let request = this.http.get(url);
  return request.toPromise();
}

showveg4(){
  let url = "http://localhost/api/showvegetable4.php";
  let request = this.http.get(url);
  return request.toPromise();
}
showveg5(){
  let url = "http://localhost/api/showvegetable5.php";
  let request = this.http.get(url);
  return request.toPromise();
}

showveg6(){
  let url = "http://localhost/api/showvegetable6.php";
  let request = this.http.get(url);
  return request.toPromise();
}

showveg7(){
  let url = "http://localhost/api/showvegetable7.php";
  let request = this.http.get(url);
  return request.toPromise();
}

showveg8(){
  let url = "http://localhost/api/showvegetable8.php";
  let request = this.http.get(url);
  return request.toPromise();
}

showveg9(){
  let url = "http://localhost/api/showvegetable9.php";
  let request = this.http.get(url);
  return request.toPromise();
}

showpriceVeg(){
  let url = "http://localhost/api/showprice1.php";
  let request = this.http.get(url);
  return request.toPromise();
}

}
