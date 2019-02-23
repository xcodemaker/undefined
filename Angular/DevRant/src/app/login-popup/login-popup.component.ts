import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { LoginService } from './login-popup.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit   {

  isOpen: boolean;
  //LoaderService is for the spinner
  constructor(private loginService: LoginService ,private renderer: Renderer2) { }

//   @ViewChild('fieldName')
// fieldName: any;
// @ViewChild('fieldName') input: ElementRef;


  //for the spinner
  ngOnInit() {
    this.loginService.status.subscribe((val: boolean) => {
      this.isOpen = val;
    });
    // this.fieldName.focus();
   
  }

  // ngAfterViewInit(){
  //   // this.renderer.selectRootElement(this.input["nativeElement"]).focus();
  //   // this.input.nativeElement.focus();
  //   setTimeout(() => {
  //     this.input.nativeElement.focus();
  //   }, 1000);
  // }

  closeLoginPopup(){
    this.loginService.display(false);
  }

 



}
