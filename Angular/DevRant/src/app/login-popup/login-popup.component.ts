import { Component, OnInit } from '@angular/core';
import { LoginService } from './login-popup.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {

  isOpen: boolean;
  //LoaderService is for the spinner
  constructor(private loginService: LoginService) { }

 

  //for the spinner
  ngOnInit() {
    this.loginService.status.subscribe((val: boolean) => {
      this.isOpen = val;
    });
  }

  closeLoginPopup(){
    this.loginService.display(false);
  }

}
