import { Component, OnInit, Input } from "@angular/core";
import { DevRantApiService } from "../Service/devrant_api";
import { Post } from "../model/rant";
import { LoginService } from "../login-popup/login-popup.service";
import { PostListRefreshService } from "../rant-list/rant-list.service";
import { AlertService } from "../alert/alert.service";
import { AlertData } from '../model/alert';

@Component({
  selector: "app-rant",
  templateUrl: "./rant.component.html",
  styleUrls: ["./rant.component.css"]
})
export class RantComponent implements OnInit {
  @Input() data;
  post: Post;
  id: any;
  alertdata:AlertData;
  alertTitle: any = "";
  alertDescription: any = "";

  constructor(
    private devrantApi: DevRantApiService,
    private loginService: LoginService,
    private refreshService: PostListRefreshService,
    private alertService: AlertService
  ) {
    this.alertdata={ "title" : "OPPS",
    "description" : "You can not vote on your own post"};
  }

  ngOnInit() {
    this.post = this.data;
  }
}
