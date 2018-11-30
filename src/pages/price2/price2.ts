// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the Price2Page page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-price2',
//   templateUrl: 'price2.html',
// })
// export class Price2Page {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad Price2Page');
//   }

// }

import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Chart } from 'chart.js';
import { CropdataProvider } from '../../providers/cropdata/cropdata';

 
@Component({
  selector: 'page-price2',
  templateUrl: 'price2.html'
})
export class Price2Page {

   tengdata:any;
 
    @ViewChild('barCanvas') barCanvas;
    @ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('lineCanvas') lineCanvas;
 
    
    constructor(public navCtrl: NavController,public nekworks:CropdataProvider) {
      
 
    }

    public lineChartData:Array<any> = [
      {data: [65, 59, 80, 81, 56, 55, 40,90,23,56,33,12], label: 'ราคาสูงสุด'},
      {data: [28, 48, 40, 19, 46, 27, 20,56,18,23,25,10], label: 'ราคาต่ำสุด'},
      
    ];
    public lineChartLabels:Array<any> = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.","ธ.ค."];
    public lineChartOptions:any = {
      responsive: true
    };
    
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';
    
    public lineChartColors:Array<any> = [
      {
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(22,15,17,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        backgroundColo1r: 'rgba(255, 99, 132, 0.2)',
        borderColor1: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor1: 'rgba(22,15,17,1)',
        pointBorderColo1r: '#fff',
        pointHoverBackgroundColor1: '#fff',
        pointHoverBorderColor1: 'rgba(148,159,177,0.8)'
       
      },
      {
        

        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        backgroundCo1lor: 'rgba(255, 99, 132, 0.2)',
        borderCol1or: 'rgba(255,99,132,1)',
        pointBac1kgroundColor: 'rgba(77,83,96,1)',
        pointBo1rderColor: '#fff',
        pointHo1verBackgroundColor: '#fff',
        pointHo1verBorderColor: 'rgba(77,83,96,1)'

        
      },
     ];
    
      // Chart events
      public chartClicked(e:any):void {
        console.log(e);
      }
    
      // Chart events
      public chartHovered(e:any):void {
        console.log(e);
      }
 
    ionViewDidLoad() {
      

    }

    see(){
      this.navCtrl.push(Price2Page);
    }
    see2(){
      this.navCtrl.push(Price2Page);
    }
    see3(){
      this.navCtrl.push(Price2Page);
    }
    see4(){
      this.navCtrl.push(Price2Page);
    }

    see5(){
      this.navCtrl.push(Price2Page);
    }
 
}

