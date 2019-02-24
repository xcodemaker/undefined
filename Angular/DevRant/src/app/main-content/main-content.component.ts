import { Component, OnInit } from "@angular/core";
import { LoaderService } from "../loader/loader.service";
import { delay, async } from "q";
import { LoginService } from "../login-popup/login-popup.service";
import { LocalStorage } from "../common/local-storage";
import { HeaderService } from "../header/header.service";
import { AlertService } from '../alert/alert.service';
import { MainRefreshService } from './refresh.service';

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.css"]
})
export class MainContentComponent implements OnInit {
  constructor(
    private loaderService: LoaderService,
    private storage: LocalStorage,
    private headerService: HeaderService,
    private alertService:AlertService,
    private refreshService:MainRefreshService
  ) {
    if (storage.getStorageData("login") != null) {
      let login = storage.getStorageData("login");
      if (login) {
        headerService.login(true);
      }
    }
  }
 

  ngOnInit() {
    this.refreshService.status.subscribe((val: boolean) => {
        if (this.storage.getStorageData("login") != null) {
      let login = this.storage.getStorageData("login");
      if (login) {
        this.headerService.login(true);
      }
    }
    });
  }

}
