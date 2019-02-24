import { Component, OnInit } from "@angular/core";
import { DevRantApiService } from "../Service/devrant_api";
import { Rant, Post } from "../model/rant";
import { post } from "selenium-webdriver/http";
import { LoaderService } from "../loader/loader.service";
import { PostListRefreshService } from "./rant-list.service";
import { NewPostService } from "../new-post/new-post.service";
import { LocalStorage } from "../common/local-storage";
import { LoginService } from "../login-popup/login-popup.service";

@Component({
  selector: "app-rant-list",
  templateUrl: "./rant-list.component.html",
  styleUrls: ["./rant-list.component.css"]
})
export class RantListComponent implements OnInit {
  // rant:Rant={};
  // rant=new Rant();
  posts: Post;
  login: boolean;
  // data:{ok:any,posts:any};

  constructor(
    private loginService: LoginService,
    private storage: LocalStorage,
    private devrantApi: DevRantApiService,
    private loaderService: LoaderService,
    private refreshService: PostListRefreshService,
    private newPostService: NewPostService
  ) {
    if (storage.getStorageData("login") != null) {
      this.login = storage.getStorageData("login");
    }
  }

  ngOnInit() {
    console.log("before post list call");
    this.loaderService.display(true);
    this.devrantApi.getAllPost().subscribe((data:any) => {
      console.log("post list call");
      // this.data=data;
      if (data.ok) {
        // console.log(data);
        this.posts = data.posts;
        this.loaderService.display(false);
      } else {
      }
    });

    this.refreshService.status.subscribe((val: boolean) => {
      console.log("refresh page");
      if (val) {
        this.loaderService.display(true);
        this.devrantApi.getAllPost().subscribe((data:any) => {
          console.log("post list call");
          // this.data=data;
          if (data.ok) {
            // console.log(data);
            this.posts = data.posts;
            this.loaderService.display(false);
          } else {
          }
        });
      }
    });
  }

  openNewPost() {
    if (this.login) {
      this.newPostService.display(true);
    } else {
      this.loginService.display(true);
    }
  }
}
