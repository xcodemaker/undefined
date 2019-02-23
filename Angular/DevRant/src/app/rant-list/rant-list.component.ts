import { Component, OnInit } from '@angular/core';
import { DevRantApiService } from '../Service/devrant_api';
import { Rant, Post } from '../model/rant';
import { post } from 'selenium-webdriver/http';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-rant-list',
  templateUrl: './rant-list.component.html',
  styleUrls: ['./rant-list.component.css']
})
export class RantListComponent implements OnInit {

  // rant:Rant={};
  // rant=new Rant();
  posts:Post;

  constructor(private devrantApi:DevRantApiService,private loaderService:LoaderService) { }

  ngOnInit() {
    console.log("before post list call");
    this.loaderService.display(true);
    this.devrantApi.getAllPost().subscribe(data => {
      console.log("post list call");
      if(data.ok){
        // console.log(data);
        this.posts=data.posts;
        this.loaderService.display(false);
        // console.log(this.posts);
        // this.loginFaild=false;
        // this.storage.storeDate("login", true);
        // this.storage.storeDate("token", data.token);
        // this.storage.storeDate("username", data.username);
        // this.loginService.display(false);
        // this.headerService.login(true);
      }else{
        // this.loginFaild=true;
        // this.headerService.login(false);
        // if(data.error=="INVALID_CREDENTIALS"){
        //   console.log('login faild');
        //   this.requestError="This can occur for invalid username and password or a wrong password for a given username.";
        // }else if(data.error=="SERVER_ERROR"){
        //   this.requestError="A server side error has been occurred.";
        // }
      }
      // this.loaderService.display(false);
      // this.isLoading=false;
      // this.showInputFeild=true;
    });
  }

}
