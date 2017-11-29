import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { YouTubeComponent } from './you-tube/you-tube.component';
import { YoutubeComponent } from './youtube/youtube.component';


@NgModule({
  declarations: [
    AppComponent,
    YouTubeComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
