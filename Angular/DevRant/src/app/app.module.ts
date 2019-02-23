import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { Routes, RouterModule } from '@angular/router';
import { RantDetailsComponent } from './rant-details/rant-details.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';

const appRoutes:Routes=[
  {path:'rant/:id',component:RantDetailsComponent},
  {path:'',component:MainContentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    LoaderComponent,
    RantDetailsComponent,
    LoginPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoaderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
