import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {InfiniteScrollModule } from "ngx-infinite-scroll";

import { AppComponent } from './app.component';
import { NewTopBestComponent } from './new-top-best/new-top-best.component';
import { NewTopBestService } from './new-top-best.service';


@NgModule({
  declarations: [
    AppComponent,
    NewTopBestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [NewTopBestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
