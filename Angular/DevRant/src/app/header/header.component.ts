import { Component, OnInit, Inject } from '@angular/core';
import { LoginService } from '../login-popup/login-popup.service';
import { HeaderService } from './header.service';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private loginServic: LoginService,private headerService:HeaderService) { }


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
        this.username=this.storage.get('username');
      }
    });
  }

  openLoginPopup(){
    this.loginServic.display(true);
  }

}
