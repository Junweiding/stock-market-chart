import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserSigninComponent } from './components/user/user-signin/user-signin.component';
import { AdminLandingComponent } from './components/admin/admin-landing/admin-landing.component';
import { UserLandingComponent } from './components/user/user-landing/user-landing.component';
import { AdminCompanyCreateComponent } from './components/admin/admin-company-create/admin-company-create.component';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
// import { UserComparsionChartsComponent } from './components/user/user-comparsion-charts/user-comparsion-charts.component';
import { UserVeriCodeComponent } from './components/user/user-signup/user-veri-code/user-veri-code.component';
import { UserSignupPwdComponent } from './components/user/user-signup/user-signup-pwd/user-signup-pwd.component';
import { AdminSigninComponent } from './components/admin/admin-signin/admin-signin.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'user/signin',component:UserSigninComponent},
  {path:'admin/signin',component:AdminSigninComponent},
  {path:'admin/land',component:AdminLandingComponent},
  {path:'user/land',component:UserLandingComponent},
  {path:'user/signup',component:UserSignupComponent},
  {path:'user/veri/code',component:UserVeriCodeComponent},
  {path:'user/signup/pwd',component:UserSignupPwdComponent},
  {path:'**',redirectTo:'home'}
  // {path:'**',redirectTo:'user/signin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
