import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import {HttpModule} from "@angular/http";
import { RecordPage } from '../pages/record/record';
import { IncomePage } from '../pages/income/income';
import { PricePage } from '../pages/price/price';
import { VegetablePage } from '../pages/vegetable/vegetable';
import { CalendarPage } from '../pages/calendar/calendar';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { CropPage } from  '../pages/crop/crop';
import { FirstpagePage } from '../pages/firstpage/firstpage';
import { NetworkProvider } from '../providers/network/network';
import { CropdetailPage } from '../pages/cropdetail/cropdetail';
import { HttpClientModule } from '@angular/common/http';
import { CropdataProvider } from '../providers/cropdata/cropdata';
import { IonicStorageModule } from '@ionic/storage';
import { UserregisterProvider } from '../providers/userregister/userregister';
import { Calendar } from '@ionic-native/calendar';
import { AdminhomePage } from '../pages/adminhome/adminhome';
import { CropdataPage } from '../pages/cropdata/cropdata';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { UpdatecropPage } from '../pages/updatecrop/updatecrop';
import { ExpensesPage } from '../pages/expenses/expenses';
import { ShowlistrecorpPage } from '../pages/showlistrecorp/showlistrecorp';
import { EmailComposer } from '@ionic-native/email-composer';
import { AdminloginPage } from '../pages/adminlogin/adminlogin';
import { UpdatedetailPage } from '../pages/updatedetail/updatedetail';
import { Veg2Page } from '../pages/veg2/veg2';
import { Veg3Page } from '../pages/veg3/veg3';
import { Veg1Page } from '../pages/veg1/veg1';
import { Veg4Page } from '../pages/veg4/veg4';
import { Veg5Page } from '../pages/veg5/veg5';
import { Veg6Page } from '../pages/veg6/veg6';
import { Veg7Page } from '../pages/veg7/veg7';
import { Veg8Page } from '../pages/veg8/veg8';
import { Veg9Page } from '../pages/veg9/veg9';
import { ChartsModule } from 'ng2-charts';
import { Price1Page } from '../pages/price1/price1';
import { Price2Page } from '../pages/price2/price2';















@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    RegisterPage,
    LoginPage,
    RecordPage,
    IncomePage,
    PricePage,
    VegetablePage,
    CalendarPage,
    QrcodePage,
    CropPage,
    FirstpagePage,
    CropdetailPage,
    CropdataPage,
    AdminhomePage,
    UpdatecropPage,
    ExpensesPage,
    ShowlistrecorpPage,
    AdminloginPage,
    UpdatedetailPage,
    Veg2Page,
    Veg3Page,
    Veg1Page,
    Veg4Page,
    Veg5Page,
    Veg6Page,
    Veg7Page,
    Veg8Page,
    Veg9Page,
    Price1Page,
    Price2Page

    
    
      



  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    NgxQRCodeModule,
    ChartsModule
    

    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    RegisterPage,
    LoginPage,
    RecordPage,
    IncomePage,
    PricePage,
    VegetablePage,
    CalendarPage,
    QrcodePage,
    CropPage,
    FirstpagePage,
    CropdetailPage ,
    CropdataPage,
    AdminhomePage,
    UpdatecropPage,
    ExpensesPage,
    ShowlistrecorpPage,
    AdminloginPage,
    UpdatedetailPage,
    Veg2Page,
    Veg3Page,
    Veg1Page,
    Veg4Page,
    Veg5Page,
    Veg6Page,
    Veg7Page,
    Veg8Page,
    Veg9Page,
    Price1Page,
    Price2Page


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkProvider,
    CropdataProvider,
    UserregisterProvider,
    Calendar,
    BarcodeScanner,
    EmailComposer
    
  ]
})
export class AppModule {}
