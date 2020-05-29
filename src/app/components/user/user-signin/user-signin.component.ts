import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from "@angular/router";
import { EncryptService } from "../../../services/encrypt.service";
import { HttpService } from "../../../services/http.service";

// import { AuthService } from '../../../auth.service';
// import { first } from 'rxjs/operators';

import * as $ from "jquery";
import axios from "axios";

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})

export class UserSigninComponent implements OnInit {
  public username: string = "";
  public password: string = "";
  public error: string;

  constructor(public router: Router,public encrypteService: EncryptService,public httpService: HttpService
    //public auth: AuthService
  ) {}

  ngOnInit() {}

  userLogin() {
    this.inputValidation();
  }

  inputValidation(): boolean {

    // this.auth.login(this.username, this.password)
    // .pipe(first())
    // .subscribe(
    //   result => this.router.navigate(['landing_page']),
    //   err => this.error = 'Could not authenticate'
    // );

    if (this.username.length > 0 && this.password.length > 0) {

      //test version
      // this.router.navigateByUrl(
      //   this.router.createUrlTree(["/user/land"],{
      //     queryParams:{
      //       username:this.username
      //     }
      //   })
      // )
      //
      
      // this.httpService.post('user/signin', {
      //   username: this.username,
      //   password: this.password
      // })
      // .then((res)=>{
      //   if(res.code == 200){
      //     alert('eureka')
      //   }
      // })
      
      axios
        .post("http://localhost:7001/user/signin", {
          username: this.username,
          password: this.password
        })
        .then((response: any) => {
          console.log(response.data);
          if (response.data != null) {
            console.log(response.data.resetPwd);
            if (response.data.resetPwd == true) {
              this.router.navigateByUrl(
                this.router.createUrlTree(["/user/reset/pwd"], {
                  queryParams: {
                    username: this.username
                  }
                })
              );
            } else {
              if (response.data.userType == "admin") {
                this.router.navigateByUrl(
                  this.router.createUrlTree(["/admin/land"], {
                    queryParams: {
                      username: this.username
                    }
                  })
                );
              } else {
                this.router.navigateByUrl(
                  this.router.createUrlTree(["/user/land"], {
                    queryParams: {
                      username: this.username
                    }
                  })
                );
              }
            }
          } else {
            let loginWarn = $("#loginWarn");
            loginWarn.addClass("fa fa-times");
            loginWarn.text(" username or password blank");
            loginWarn.css("color", "red");
            return false;
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      let loginWarn = $("#loginWarn");
      loginWarn.addClass("fa fa-times");
      loginWarn.text(" username or password blank");
      loginWarn.css("color", "red");
      return false;
    }
  }
}
