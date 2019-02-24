import { Component, OnInit } from "@angular/core";
import { DevRantApiService } from "../Service/devrant_api";
import { Post } from "../model/rant";
import { PostDetail } from "../model/postDetails";
import { LocalStorage } from "../common/local-storage";
import { HeaderService } from "../header/header.service";
import { VoteService } from "../vote-section/vote-section.service";
import { PostDetailsRefreshService } from "./rant-details.service";
import { LoaderService } from "../loader/loader.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-rant-details",
  templateUrl: "./rant-details.component.html",
  styleUrls: ["./rant-details.component.css"]
})
export class RantDetailsComponent implements OnInit {
  id: any;
  post: any = {};
  isMyPost: any;
  comments: any;
  noComment: boolean;

  constructor(
    private devrantApi: DevRantApiService,
    private storage: LocalStorage,
    private headerService: HeaderService,
    private voteService: VoteService,
    private refreshService: PostDetailsRefreshService,
    private loaderService: LoaderService,
    private router: Router
  ) {
    if (storage.getStorageData("login") != null) {
      let login = storage.getStorageData("login");
      if (login) {
        headerService.login(true);
      }
    }

    var url = window.location.pathname;
    var urlsplit = url.split("/").slice(-1)[0];
    console.log("id :", urlsplit);
    this.id = urlsplit;
    this.devrantApi.getPostDeatils(this.id).subscribe(data => {
      console.log("post list call");
      // this.data=data;
      if (data.ok) {
        console.log(data);
        this.post = data.post;
        this.voteService.update(this.post);
        this.isMyPost = data.post.isMyPost;
        this.comments = data.post.comments;
        this.noComment = data.post.comments.length < 1 ? true : false;
        // this.loaderService.display(false);
      } else {
      }
    });
  }

  ngOnInit() {
    this.refreshService.status.subscribe((val: boolean) => {
      console.log("refresh page");
      if (val) {
        this.loaderService.display(true);
        this.devrantApi.getPostDeatils(this.id).subscribe(data => {
          console.log("post list call");
          // this.data=data;
          if (data.ok) {
            console.log(data);
            this.post = data.post;
            this.voteService.update(this.post);
            this.isMyPost = data.post.isMyPost;
            this.loaderService.display(false);
          } else {
          }
        });
      }
    });
  }

  deletePost() {
    this.loaderService.display(true);
    this.devrantApi.deletePost(this.id).subscribe(data => {
      console.log("post list call");
      // this.data=data;
      if (data.ok) {
        console.log(data);
        // this.post=data.post;
        // this.voteService.update(this.post);
        // this.isMyPost=data.post.isMyPost;
        this.loaderService.display(false);

        this.router.navigateByUrl("/");
      } else {
      }
    });
  }
}
