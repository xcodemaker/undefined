import {
  Component,
  OnInit,
  ViewChild,
  AfterContentInit,
  AfterViewInit,
  ElementRef,
  Renderer2,
  Inject
} from "@angular/core";
import { LoginService } from "./login-popup.service";
import { LoaderService } from "../loader/loader.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import ERROR_MESSAGES from "../common/Constants";
import { DevRantApiService } from "../Service/devrant_api";
import { HeaderService } from "../header/header.service";
import { LocalStorage } from "../common/local-storage";
import { Route, Router } from '@angular/router';
import { MainRefreshService } from '../main-content/refresh.service';
import { PostListRefreshService } from '../rant-list/rant-list.service';

@Component({
  selector: "app-login-popup",
  templateUrl: "./login-popup.component.html",
  styleUrls: ["./login-popup.component.css"]
})
export class LoginPopupComponent implements OnInit {
  isOpen: boolean;
  angForm: FormGroup;
  name_error: any;
  password_error: any;
  name = "";
  password = "";
  isLoading: boolean = false;
  showInputFeild: boolean = true;
  requestError: any = "";
  // userName:any;
  loginInput: any = {};
  loginFaild: boolean = false;
  //LoaderService is for the spinner
  constructor(
    private headerService: HeaderService,
    private storage: LocalStorage,
    private loginService: LoginService,
    private renderer: Renderer2,
    private loaderService: LoaderService,
    private fb: FormBuilder,
    private devrantApi: DevRantApiService,
    private route :Router,
    // private refreshService:MainRefreshService,
    private refreshService: PostListRefreshService,
  ) {
    this.createForm();
    this.name_error = ERROR_MESSAGES.LOGIN_USERNAME_EMPTY;
    this.password_error = ERROR_MESSAGES.LOGIN_PASSWORD_EMPTY;
  }

  createForm() {
    this.angForm = this.fb.group({
      name: [this.name, Validators.required],
      password: [this.password, Validators.required]
    });
  }

  //for the spinner
  ngOnInit() {
    this.loginService.status.subscribe((val: boolean) => {
      this.isOpen = val;
    });
  }

  closeLoginPopup() {
    this.loginService.display(false);
    this.loaderService.display(false);
    this.loginFaild = false;
    this.angForm.reset();
  }

  submitClick() {
    console.log(
      "username :" + this.loginInput.username,
      "pasword :" + this.loginInput.pass
    );
    this.loaderService.display(true);
    this.isLoading = true;
    this.showInputFeild = false;
    this.devrantApi
      .userActivate(this.loginInput.username, this.loginInput.pass)
      .subscribe(data => {
        console.log(data);
        if (data.ok) {
          this.loginFaild = false;
          this.storage.storeDate("login", true);
          this.storage.storeDate("token", data.token);
          this.storage.storeDate("username", data.username);
          this.loginService.display(false);
          this.headerService.login(true);
          // this.route.navigateByUrl("/");
            // window.location.reload();
            this.devrantApi.refresh();
            this.refreshService.refresh(true);
            
        
        } else {
          this.loginFaild = true;
          this.headerService.login(false);
          if (data.error == "INVALID_CREDENTIALS") {
            console.log("login faild");
            this.requestError =
              "This can occur for invalid username and password or a wrong password for a given username.";
          } else if (data.error == "SERVER_ERROR") {
            this.requestError = "A server side error has been occurred.";
          }
        }
        this.loaderService.display(false);
        this.isLoading = false;
        this.showInputFeild = true;
      });
  }

  keyDownFunction() {}
}
