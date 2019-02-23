import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader/loader.service';
import { delay, async } from 'q';
import { LoginService } from '../login-popup/login-popup.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private loaderService: LoaderService) { }
  async  delayLoader() {
    await delay(3000);

     this.loaderService.display(false);
     
  }

  async  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  

  ngOnInit()  {
   //http call starts
   this.loaderService.display(true);
  this.delayLoader();
   
   
   
   //http call ends
   
  }

  

}
