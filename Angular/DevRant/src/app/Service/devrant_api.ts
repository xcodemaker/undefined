import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import * as CONST from '../common/Constants';


@Injectable({
  providedIn: 'root'
})
export class DevRantApiService {
  

  constructor(private http:HttpClient) { }


  
  userActivate(username:string,password:string){
    let headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });
     let options = { headers: headers };
	 return this.http.post(CONST.USER_ACTIVATE,{"username":username,"password":password},options);
  }


//   initArticles(){
//    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
//   }

//   getArticlesByID(source: String){
//    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
//   }



}
