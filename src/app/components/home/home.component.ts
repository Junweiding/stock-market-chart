import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EncryptService } from "../../services/encrypt.service";
import { HttpService } from "../../services/http.service";
import * as $ from "jquery";
import axios from "axios";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usertype: string="";

  constructor(public router: Router,public encrypteService: EncryptService,public httpService: HttpService) { }

  ngOnInit(): void {
  }

  adminLogin() {
    this.usertype="admin";
    this.inputValidation(this.usertype);
  }

  userLogin() {
    this.usertype="user";
    this.inputValidation(this.usertype);
  }

  inputValidation(btype: string): boolean {
     console.log(btype)
    switch(btype){
      case "user":{
        console.log("aaaa")
        this.router.navigateByUrl(
          this.router.createUrlTree(["user/signin"],{
            queryParams:{
              usertype:this.usertype
            }
          })
        )
        break;
      }
      case "admin":{
        console.log("sss")
        this.router.navigateByUrl(
            this.router.createUrlTree(["admin/signin"],{
            queryParams:{
              usertype:this.usertype
            }
          })
        )
        break;
      }
      default:{
        return false;
      }
    }
  }
}
