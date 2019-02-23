import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from './alert.service';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AlertData } from '../model/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() data;

  isOpen:boolean=true;
  angForm: FormGroup;
  alertTitle:any="";
  alertDescription:any="";
  alertData:AlertData;

  constructor(private alertService:AlertService,private fb: FormBuilder) {
    this.createForm();
    console.log("alert data:",this.data);
    this.alertData=this.data;
    // this.alertTitle=this.alertData.title;
    // this.alertDescription=this.alertData.description;
   }

   createForm() {
    this.angForm = this.fb.group({
    });
  }


  ngOnInit() {
    this.alertService.status.subscribe((val: boolean) => {
      this.isOpen = val;
    });
  }

  closeAlert(){
    this.alertService.display(false);
  }

}
