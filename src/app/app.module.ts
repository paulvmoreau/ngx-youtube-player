import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxYoutubePlayer14Module} from '../../projects/ngx-youtube-player-14/src/lib/ngx-youtube-player-14.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxYoutubePlayer14Module.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
