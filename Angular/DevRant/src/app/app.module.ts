import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { LoaderComponent } from "./loader/loader.component";
import { LoaderService } from "./loader/loader.service";
import { Routes, RouterModule } from "@angular/router";
import { RantDetailsComponent } from "./rant-details/rant-details.component";
import { LoginPopupComponent } from "./login-popup/login-popup.component";
import { LoginService } from "./login-popup/login-popup.service";
import { FocusModule } from "angular2-focus";
import { ReactiveFormsModule } from "@angular/forms";
import { DevRantApiService } from "./Service/devrant_api";
import { HttpClientModule } from "@angular/common/http";
import { StorageServiceModule } from "angular-webstorage-service";
import { HeaderService } from "./header/header.service";
import { LocalStorage } from "./common/local-storage";
import { RantListComponent } from "./rant-list/rant-list.component";
import { RantComponent } from "./rant/rant.component";
import { PostListRefreshService } from "./rant-list/rant-list.service";
import { AlertComponent } from "./alert/alert.component";
import { AlertService } from "./alert/alert.service";
import { VoteSectionComponent } from "./vote-section/vote-section.component";
import { NewPostComponent } from "./new-post/new-post.component";
import { NewPostService } from "./new-post/new-post.service";
import { VoteService } from "./vote-section/vote-section.service";
import { PostDetailsRefreshService } from "./rant-details/rant-details.service";
import { CommentComponent } from './comment/comment.component';

const appRoutes: Routes = [
  { path: "rant/:id", component: RantDetailsComponent },
  { path: "", component: MainContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    LoaderComponent,
    RantDetailsComponent,
    LoginPopupComponent,
    RantListComponent,
    RantComponent,
    AlertComponent,
    VoteSectionComponent,
    NewPostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FocusModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [
    LoaderService,
    LoginService,
    DevRantApiService,
    HeaderService,
    LocalStorage,
    PostListRefreshService,
    AlertService,
    NewPostService,
    VoteService,
    PostDetailsRefreshService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
