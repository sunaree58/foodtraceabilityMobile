//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
//import { resolve } from 'path';

/*
  Generated class for the UserregisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//let apiUrl ='http://localhost/app/register.php';
let url = 'http://localhost/app/login.php';

@Injectable()
export class UserregisterProvider {

  constructor(public http : Http) {
    console.log('Hello UserregisterProvider Provider');
  }

  /* postData(credentaials)
  {
    return new Promise((resolve,reject)=>{
      let headers = new Headers();
      this.http.post(apiUrl,JSON.stringify(credentaials),{headers:headers})
      .subscribe(res=>{
        resolve(res.json());
      },(err)=>{
        reject(err);
      });
    });
  } */

  getData(credentaials)
  {
    return new Promise((resolve,reject)=>{
      let headers = new Headers();
      this.http.post(url,JSON.stringify(credentaials),{headers:headers})
      .subscribe(res=>{
        resolve(res.json());
      },(err)=>{
        reject(err);
      });
    });
  }  

}
