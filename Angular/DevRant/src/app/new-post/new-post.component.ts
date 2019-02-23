import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { NewPostService } from './new-post.service';

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.css"]
})
export class NewPostComponent implements OnInit {
  angForm: FormGroup;
  isOpen: boolean;

  constructor(private fb: FormBuilder,private newPostService:NewPostService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      //  name: [this.name, Validators.required ],
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
  }
}
