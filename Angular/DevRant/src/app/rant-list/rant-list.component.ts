import { Component, OnInit } from '@angular/core';
import { DevRantApiService } from '../Service/devrant_api';
import { Rant, Post } from '../model/rant';
import { post } from 'selenium-webdriver/http';
import { LoaderService } from '../loader/loader.service';
import { PostListRefreshService } from './rant-list.service';

@Component({
  selector: 'app-rant-list',
  templateUrl: './rant-list.component.html',
  styleUrls: ['./rant-list.component.css']
})
export class RantListComponent implements OnInit {

  // rant:Rant={};
  // rant=new Rant();
  posts:Post;
  // data:{ok:any,posts:any};

  constructor(private devrantApi:DevRantApiService,private loaderService:LoaderService,private refreshService:PostListRefreshService) { }

  ngOnInit() {
    console.log("before post list call");
    this.loaderService.display(true);
    this.devrantApi.getAllPost().subscribe(data => {
      console.log("post list call");
      // this.data=data;
      if(data.ok){

        // console.log(data);
        this.posts=data.posts;
        this.loaderService.display(false);
        
      }else{
      
      }
    });

    this.refreshService.status.subscribe((val: boolean) => {
      console.log("refresh page");
      if(val){
        this.loaderService.display(true);
        this.devrantApi.getAllPost().subscribe(data => {
          console.log("post list call");
          // this.data=data;
          if(data.ok){
    
            // console.log(data);
            this.posts=data.posts;
            this.loaderService.display(false);
            
          }else{
          
          }
        });
      }
    });
  }

}
