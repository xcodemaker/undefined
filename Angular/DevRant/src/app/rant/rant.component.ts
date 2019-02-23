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
    console.log("posts",this.data);
    if (this.post.myVote == 1) {
      this.addClass(1);
    } else if (this.post.myVote == -1) {
      this.addClass(-1);
    }
  }
  addClass(id: any) {
    this.id = id;
  }

  upVoteClick() {
    if (this.post.myVote == 1) {
      this.resetVote();
    } else {
      this.upVote();
    }
  }

  downVoteClick() {
    if (this.post.myVote == -1) {
      this.resetVote();
    } else {
      this.downVote();
    }
  }

  upVote() {
    this.devrantApi.upVote(this.post.id).subscribe(data => {
      console.log(data);
      if (data.ok) {
        this.refreshService.refresh(true);
      } else {
        if (data.error == "ACCESS_DENIED") {
          this.loginService.display(true);
        } else if (data.error == "AUTHOR_CANNOT_VOTE") {
          this.alertdata={ "title" : "OPPS",
          "description" : "You can not vote on your own post"};
         
          this.alertService.display(true);
        }
      }
    });
  }

  resetVote() {
    this.devrantApi.resetVote(this.post.id).subscribe(data => {
      console.log(data);
      if (data.ok) {
        this.refreshService.refresh(true);
      } else {
        if (data.error == "ACCESS_DENIED") {
          this.loginService.display(true);
        }
      }
    });
  }

  downVote() {
    this.devrantApi.downVote(this.post.id).subscribe(data => {
      console.log(data);
      if (data.ok) {
        this.refreshService.refresh(true);
      } else {
        if (data.error == "ACCESS_DENIED") {
          this.loginService.display(true);
        }
      }
    });
  }
}
