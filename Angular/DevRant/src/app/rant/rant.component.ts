import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rant',
  templateUrl: './rant.component.html',
  styleUrls: ['./rant.component.css']
})
export class RantComponent implements OnInit {

  @Input() data;
post = [];

constructor() {
}

ngOnInit() {
  this.post = this.data;
  console.log(this.post);
}

}
