import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NewPostService } from './new-post.service';
import { LoaderService } from '../loader/loader.service';
import { DevRantApiService } from '../Service/devrant_api';
import { LoginService } from '../login-popup/login-popup.service';
import { PostListRefreshService } from '../rant-list/rant-list.service';

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.css"]
})
export class NewPostComponent implements OnInit {
  angForm: FormGroup;
  isOpen: boolean;
  showInputFeild:boolean=true;
  isLoading:boolean=false;
  loginInput: any = {};
  content_error="post content is required";
  requestError:any="";

  constructor(private refreshPost:PostListRefreshService, private fb: FormBuilder,private newPostService:NewPostService,private loaderService:LoaderService,private devrantApi:DevRantApiService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      content: ['', Validators.required ],
      //  password: [this.password, Validators.required ]
    });
  }

  ngOnInit() {
    this.newPostService.status.subscribe((val: boolean) => {
      this.isOpen = val;
    });
  }

  closeNewPost(){
    this.newPostService.display(false);
    this.angForm.reset();
  }

  submitClick(){
    this.loaderService.display(true);
    this.isLoading=true;
    this.showInputFeild=false;
    this.devrantApi.addNewPost(this.loginInput.username).subscribe((data:any) => {
      console.log(data);
      if(data.ok){
       
        this.newPostService.display(false);
        this.refreshPost.refresh(true);
       
      }else{
        if(data.error=="INVALID_CREDENTIALS"){
          // this.loginService.display(true);
        }else if(data.error=="SERVER_ERROR"){
          this.requestError="A server side error has been occurred.";
        }
      }
      this.loaderService.display(false);
      this.isLoading=false;
      this.showInputFeild=true;
    });
   
  }
}
