import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { LoginService } from './login-popup.service';
import { LoaderService } from '../loader/loader.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit   {

  isOpen: boolean;
  angForm: FormGroup;
  //LoaderService is for the spinner
  constructor(private loginService: LoginService ,private renderer: Renderer2,private loaderService:LoaderService,private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       email: ['', Validators.required ]
    });
  }


  //for the spinner
  ngOnInit() {
    this.loginService.status.subscribe((val: boolean) => {
      this.isOpen = val;
    });
    // this.fieldName.focus();
    // this.loaderService.display(true);
   
  }


  closeLoginPopup(){
    this.loginService.display(false);
    this.loaderService.display(false);
    this.angForm.reset();
  }

  submitClick(){
    this.loaderService.display(true);
   
  }

  keyDownFunction() {
    // if(event.keyCode == 13) {
      // console.log(this.angForm.controls['name'].errors.required==null);
      // if(this.angForm.controls['name'].errors.required==null){
      //   this.submitClick();
      // }
      
      // rest of your code
    // }
  }



}
