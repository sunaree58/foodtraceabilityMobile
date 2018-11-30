
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Chart } from 'chart.js';
import { CropdataProvider } from '../../providers/cropdata/cropdata';


 
@Component({
  selector: 'page-price',
  templateUrl: 'price.html'
})
export class PricePage {
  tengdata:any;
 
    @ViewChild('barCanvas') barCanvas;
    @ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('lineCanvas') lineCanvas;
 
    barChart: any;
    // doughnutChart: any;
    lineChart: any;
    year:any;
    myhighPrice : any[]=[10, 12, 13, 10, 16, 12, 14,10,10,12,15,30];
    lowPrice : any[] = [3, 4, 5, 5, 4, 6, 3, 3, 6,5,6,4];
    

    
    constructor(public navCtrl: NavController,public nekworks:CropdataProvider, public navParams: NavParams) {
      this.year = navParams.get('year');
 
    }
     
    public lineChartData:Array<any> = [
      {data:this.myhighPrice, label: 'ราคาสูงสุด'},
      {data: this.lowPrice, label: 'ราคาต่ำสุด'},
      
      
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
      this.nekworks.showpriceVeg().then(data=>{
        this.tengdata = data;
        console.log("แตง",this.tengdata.month);
      })
    }

    seeprice1(year){
      this.navCtrl.push(PricePage,{year:year});
    }
    seeprice2(){
      this.navCtrl.push(PricePage);
    }
    seeprice3(){
      this.navCtrl.push(PricePage);
    }
    seeprice4(){
      this.navCtrl.push(PricePage);
    }

    seeprice5(){
      this.navCtrl.push(PricePage);
    }
 
}
