import { Component, OnInit, Inject } from '@angular/core';
import { LoginService } from '../login-popup/login-popup.service';
import { HeaderService } from './header.service';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { LocalStorage } from '../common/local-storage';
import { DevRantApiService } from '../Service/devrant_api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private storage: LocalStorage,private loginServic: LoginService,private headerService:HeaderService,private devrantApi:DevRantApiService) { }


  login: boolean=false;
  logout:boolean=true;
  username:any;
  //LoaderService is for the spinner
  //for the spinner
  ngOnInit() {
    this.headerService.status.subscribe((val: boolean) => {
      this.login = val;
      this.logout = !val;
      if(this.login){
        this.username=this.storage.getStorageData('username');
      }
    });
  }

  clickLogout(){
    this.devrantApi.userDeactivate().subscribe(data => {
      console.log(data);
      if(data.ok){
        // this.loginFaild=false;
        this.storage.clearData("login" );
        this.storage.clearData("token");
        this.storage.clearData("username");
        // this.loginService.display(false);
        this.headerService.login(false);
      }else{
        // this.loginFaild=true;
        // this.headerService.login(false);
        // if(data.error=="INVALID_CREDENTIALS"){
        //   console.log('login faild');
        //   this.requestError="This can occur for invalid username and password or a wrong password for a given username.";
        // }else if(data.error=="SERVER_ERROR"){
        //   this.requestError="A server side error has been occurred.";
        // }
      }
      // this.loaderService.display(false);
      // this.isLoading=false;
      // this.showInputFeild=true;
    });
  }

  openLoginPopup(){
    this.loginServic.display(true);
  }

}
