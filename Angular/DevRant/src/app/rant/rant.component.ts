import { Component, OnInit, Input } from "@angular/core";
import { DevRantApiService } from "../Service/devrant_api";
import { Post } from "../model/rant";
import { LoginService } from "../login-popup/login-popup.service";

@Component({
  selector: "app-rant",
  templateUrl: "./rant.component.html",
  styleUrls: ["./rant.component.css"]
})
export class RantComponent implements OnInit {
  @Input() data;
  post: Post;
  id: any;

  constructor(
    private devrantApi: DevRantApiService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.post = this.data;
    console.log(this.post);
    if (this.post.myVote == 1) {
      this.addClass(1);
    } else if (this.post.myVote == -1) {
      this.addClass(-1);
    }
  }
  addClass(id: any) {
    this.id = id;
  }

  upVote() {
    this.devrantApi.upVote(this.post.id).subscribe(data => {
      console.log(data);
      if (data.ok) {
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
      } else {
        if (data.error == "ACCESS_DENIED") {
          this.loginService.display(true);
        }
      }
    });
  }
}
