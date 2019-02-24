import { Component, OnInit, Input } from '@angular/core';
import { CommentItem } from '../model/postDetails';
import { DevRantApiService } from '../Service/devrant_api';
import { LoaderService } from '../loader/loader.service';
import { Router } from '@angular/router';
import { PostDetailsRefreshService } from '../rant-details/rant-details.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() data;
  comment:CommentItem;
  ismyComment:boolean;
  id:any;
 
  
  constructor(private devrantApi:DevRantApiService,private loaderService:LoaderService,private router: Router, private refreshService: PostDetailsRefreshService,) {

// console.log("comment",this.comment);
var url = window.location.pathname;
    var urlsplit = url.split("/").slice(-1)[0];
    console.log("id :",urlsplit);
    this.id=urlsplit;
   }

  ngOnInit() {
    this.comment=this.data;
    this.ismyComment=this.comment.isMyComment;
    console.log("comment",this.comment);
  }

  deleteComment(){
    this.loaderService.display(true);
    this.devrantApi.deleteComment(this.id,this.comment.id).subscribe(data => {
      console.log("post list call");
      // this.data=data;
      if(data.ok){

        console.log(data);
        // this.post=data.post;
        // this.voteService.update(this.post);
        // this.isMyPost=data.post.isMyPost;
        this.loaderService.display(false);
        this.refreshService.refresh(true);
        
// this.router.navigateByUrl('/rant/'+this.id);
        
      }else{
      
      }
    });
  }

}
