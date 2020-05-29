import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxEchartsModule} from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSigninComponent } from './components/user/user-signin/user-signin.component';
import { AdminLandingComponent } from './components/admin/admin-landing/admin-landing.component';
import { UserLandingComponent } from './components/user/user-landing/user-landing.component';
import { AdminCompanyCreateComponent } from './components/admin/admin-company-create/admin-company-create.component';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
import { UserComparsionChartsComponent } from './components/user/user-comparsion-charts/user-comparsion-charts.component';
import { HomeComponent } from './components/home/home.component';

import {EncryptService} from './services/encrypt.service'
import {EmailValidationService} from './services/email-validation.service';
import {HttpService} from './services/http.service';
import { AdminImportExcelComponent } from './components/admin/admin-import-excel/admin-import-excel.component';
import { AdminUploadSummaryComponent } from './components/admin/admin-upload-summary/admin-upload-summary.component';
import { AdminCompanyListComponent } from './components/admin/admin-company-list/admin-company-list.component';
import { UserVeriCodeComponent } from './components/user/user-signup/user-veri-code/user-veri-code.component';
import { UserSignupPwdComponent } from './components/user/user-signup/user-signup-pwd/user-signup-pwd.component';
import { AdminSigninComponent } from './components/admin/admin-signin/admin-signin.component';
import { AdminStockExchangeCreateComponent } from './components/admin/admin-stock-exchange-create/admin-stock-exchange-create.component';
import { AdminStockExchangeListComponent } from './components/admin/admin-stock-exchange-list/admin-stock-exchange-list.component';
import { AdminIpoCreateComponent } from './components/admin/admin-ipo-create/admin-ipo-create.component';
import { AdminIpoListComponent } from './components/admin/admin-ipo-list/admin-ipo-list.component';

// import { AuthService } from './auth.service';
// import { AuthGuard } from './auth.guard';
// import { AuthInterceptor } from './service/AuthInterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    UserSigninComponent,
    AdminLandingComponent,
    UserLandingComponent,
    AdminCompanyCreateComponent,
    UserSignupComponent,
    UserComparsionChartsComponent,
    HomeComponent,
    AdminImportExcelComponent,
    AdminUploadSummaryComponent,
    AdminCompanyListComponent,
    UserVeriCodeComponent,
    UserSignupPwdComponent,
    AdminSigninComponent,
    AdminStockExchangeCreateComponent,
    AdminStockExchangeListComponent,
    AdminIpoCreateComponent,
    AdminIpoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxEchartsModule
  ],
  providers: [EncryptService, EmailValidationService, HttpService],
  // providers: [EncryptService, EmailValidationService, HttpService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
