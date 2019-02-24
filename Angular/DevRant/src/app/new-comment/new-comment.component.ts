import { Component, OnInit } from "@angular/core";
import { PostListRefreshService } from "../rant-list/rant-list.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NewPostService } from "../new-post/new-post.service";
import { LoaderService } from "../loader/loader.service";
import { DevRantApiService } from "../Service/devrant_api";
import { NewCommentService } from "./new-comment.service";
import { PostDetailsRefreshService } from '../rant-details/rant-details.service';

@Component({
  selector: "app-new-comment",
  templateUrl: "./new-comment.component.html",
  styleUrls: ["./new-comment.component.css"]
})
export class NewCommentComponent implements OnInit {
  angForm: FormGroup;
  isOpen: boolean;
  showInputFeild: boolean = true;
  isLoading: boolean = false;
  loginInput: any = {};
  content_error = "Comment content is required";
  requestError: any = "";
  id:any;

  constructor(
    private refreshPost: PostListRefreshService,
    private fb: FormBuilder,
    private newCommentService: NewCommentService,
    private loaderService: LoaderService,
    private devrantApi: DevRantApiService,
    private refreshPostDetails:PostDetailsRefreshService
  ) {
    this.createForm();
    var url = window.location.pathname;
    var urlsplit = url.split("/").slice(-1)[0];
    console.log("id :", urlsplit);
    this.id = urlsplit;
  }

  createForm() {
    this.angForm = this.fb.group({
      content: ["", Validators.required]
      //  password: [this.password, Validators.required ]
    });
  }

  ngOnInit() {
    this.newCommentService.status.subscribe((val: boolean) => {
      this.isOpen = val;
    });
  }

  closeCommentPost() {
    this.newCommentService.display(false);
    this.angForm.reset();
  }

  submitClick() {
    this.loaderService.display(true);
    this.isLoading = true;
    this.showInputFeild = false;
    this.devrantApi.addNewComment(this.id,this.loginInput.username).subscribe(data => {
      console.log(data);
      if (data.ok) {
        this.newCommentService.display(false);
        this.refreshPostDetails.refresh(true);
      } else {
        if (data.error == "INVALID_CREDENTIALS") {
          // this.loginService.display(true);
        } else if (data.error == "SERVER_ERROR") {
          this.requestError = "A server side error has been occurred.";
        }
      }
      this.loaderService.display(false);
      this.isLoading = false;
      this.showInputFeild = true;
    });
  }
}
