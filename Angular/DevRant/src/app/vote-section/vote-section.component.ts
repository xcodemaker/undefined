import { Component, OnInit, Input } from '@angular/core';
import { DevRantApiService } from '../Service/devrant_api';
import { LoginService } from '../login-popup/login-popup.service';
import { PostListRefreshService } from '../rant-list/rant-list.service';
import { AlertService } from '../alert/alert.service';
import { Post } from '../model/rant';
import { VoteService } from './vote-section.service';
import { PostDetailsRefreshService } from '../rant-details/rant-details.service';

@Component({
  selector: 'app-vote-section',
  templateUrl: './vote-section.component.html',
  styleUrls: ['./vote-section.component.css']
})
export class VoteSectionComponent implements OnInit {
  @Input() data;
  post: any;
  id: any;

  constructor(private devrantApi: DevRantApiService,
    private loginService: LoginService,
    private refreshService: PostListRefreshService,
    private refreshService2: PostDetailsRefreshService,
    private alertService: AlertService,private voteService:VoteService){}

  ngOnInit() {
      this.voteService.status.subscribe((val: any) => {
        this.post = val;
        console.log("val",val);
        if (this.post.myVote == 1) {
          this.addClass(1);
        } else if (this.post.myVote == -1) {
          this.addClass(-1);
        }
      });
    console.log("vote :",this.data);
    this.post = this.data;
    if (this.post.myVote == 1) {
      this.addClass(1);
    } else if (this.post.myVote == -1) {
      this.addClass(-1);
    }
    // console.log("posts",this.data);
    
  }
  addClass(id: any) {
    this.id = id;
  }

  upVoteClick(e) {
e.preventDefault();
    if (this.post.myVote == 1) {
      this.resetVote();
    } else {
      this.upVote();
    }
  }

  downVoteClick(e) {
    e.preventDefault();
    if (this.post.myVote == -1) {
      this.resetVote();
    } else {
      this.downVote();
    }
  }

  upVote() {
    this.devrantApi.upVote(this.post.id).subscribe((data:any) => {
      console.log(data);
      if (data.ok) {
        this.refreshService.refresh(true);
        this.refreshService2.refresh(true);
      } else {
        if (data.error == "ACCESS_DENIED") {
          this.loginService.display(true);
        } else if (data.error == "AUTHOR_CANNOT_VOTE") {
          // this.alertdata={ "title" : "OPPS",
          // "description" : "You can not vote on your own post"};
         
          this.alertService.display(true);
        }
      }
    });
  }

  resetVote() {
    this.devrantApi.resetVote(this.post.id).subscribe((data:any) => {
      console.log(data);
      if (data.ok) {
        this.refreshService.refresh(true);
        this.refreshService2.refresh(true);
      } else {
        if (data.error == "ACCESS_DENIED") {
          this.loginService.display(true);
        }
      }
    });
  }

  downVote() {
    this.devrantApi.downVote(this.post.id).subscribe((data:any) => {
      console.log(data);
      if (data.ok) {
        this.refreshService.refresh(true);
        this.refreshService2.refresh(true);
      } else {
        if (data.error == "ACCESS_DENIED") {
          this.loginService.display(true);
        }
      }
    });
  }

}
