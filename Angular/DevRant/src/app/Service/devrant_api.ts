import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as CONST from "../common/Constants";
import { LocalStorage } from "../common/local-storage";

@Injectable({
  providedIn: "root"
})
export class DevRantApiService {
  x_token: any = "";

  constructor(private http: HttpClient, private storage: LocalStorage) {
    if (storage.getStorageData("login") != null) {
      let login = storage.getStorageData("login");
      if (login) {
        this.x_token = storage.getStorageData("token");
      }
    }
  }

  userActivate(username: string, password: string) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = { headers: headers };
    return this.http.post(
      CONST.USER_ACTIVATE,
      { username: username, password: password },
      options
    );
  }

  userDeactivate() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Token": this.x_token
    });
    let options = { headers: headers };
    return this.http.post(CONST.USER_DEACTIVATE, {}, options);
  }

  getAllPost() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Token": this.x_token
    });
    let options = { headers: headers };
    return this.http.get(CONST.GET_POST_LIST, options);
  }

  upVote(id: any) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Token": this.x_token
    });
    let options = { headers: headers };
    return this.http.post(CONST.VOTE, { postId: id, direction: "up" }, options);
  }

  downVote(id: any) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Token": this.x_token
    });
    let options = { headers: headers };
    return this.http.post(
      CONST.VOTE,
      { postId: id, direction: "down" },
      options
    );
  }

  resetVote(id: any) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Token": this.x_token
    });
    let options = { headers: headers };
    return this.http.post(
      CONST.VOTE,
      { postId: id, direction: "reset" },
      options
    );
  }

  addNewPost(content: any) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Token": this.x_token
    });
    let options = { headers: headers };
    return this.http.post(CONST.ADD_NEW_POST, { content: content }, options);
  }

  getPostDeatils(id: any) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Token": this.x_token
    });
    let options = { headers: headers };
    return this.http.get(CONST.POST_DETAILS + id, options);
  }

  deletePost(postId: any) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Token": this.x_token
    });
    // let a =new RequestOptionsArgs(){

    // }
    let options = { body: { postId: postId }, headers: headers };
    return this.http.request("delete", CONST.POST_DELETE, options);
  }
}
