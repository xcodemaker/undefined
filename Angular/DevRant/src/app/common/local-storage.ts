import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { Inject } from '@angular/core';
import { HeaderService } from '../header/header.service';

export class LocalStorage  {

    constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private headerService:HeaderService) { }
  
  
    storeDate(key:any,value:any){
        this.storage.set(key, value);
    }

    getStorageData(key:any){
        return this.storage.get(key);
    }
  
  }