import { Component, OnInit } from '@angular/core';
import { DevRantApiService } from '../Service/devrant_api';

@Component({
  selector: 'app-rant-details',
  templateUrl: './rant-details.component.html',
  styleUrls: ['./rant-details.component.css']
})
export class RantDetailsComponent implements OnInit {

  constructor(private devrantApi:DevRantApiService,) { }

  ngOnInit() {
  
  }

}
