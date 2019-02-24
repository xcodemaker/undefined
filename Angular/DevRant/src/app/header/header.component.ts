import { Component, OnInit, Inject } from "@angular/core";
import { LoginService } from "../login-popup/login-popup.service";
import { HeaderService } from "./header.service";
import { WebStorageService, LOCAL_STORAGE } from "angular-webstorage-service";
import { LocalStorage } from "../common/local-storage";
import { DevRantApiService } from "../Service/devrant_api";
import { Router } from "@angular/router";
import { MainRefreshService } from '../main-content/refresh.service';
import { PostListRefreshService } from '../rant-list/rant-list.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private storage: LocalStorage,
    private loginServic: LoginService,
    private headerService: HeaderService,
    private devrantApi: DevRantApiService,
    private router: Router,
    private refresh :MainRefreshService,
    private refreshService: PostListRefreshService,
  ) {}

  login: boolean = false;
  logout: boolean = true;
  username: any;
  //LoaderService is for the spinner
  //for the spinner
  ngOnInit() {
    this.headerService.status.subscribe((val: boolean) => {
      this.login = val;
      this.logout = !val;
      if (this.login) {
        this.username = this.storage.getStorageData("username");
      }
    });
  }

  clickLogout() {
    this.devrantApi.userDeactivate().subscribe(data => {
      console.log(data);
      if (data.ok) {
        this.storage.clearData("login");
        this.storage.clearData("token");
        this.storage.clearData("username");
        // this.loginService.display(false);
        this.headerService.login(false);
        this.router.navigateByUrl("/");
        this.devrantApi.refresh();
        this.refreshService.refresh(true);

      } else {
      }
    });
  }

  openLoginPopup() {
    this.loginServic.display(true);
  }
}
