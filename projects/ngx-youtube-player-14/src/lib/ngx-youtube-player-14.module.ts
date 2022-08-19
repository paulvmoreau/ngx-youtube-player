import { NgModule, ModuleWithProviders } from '@angular/core';
import { YoutubePlayer14Component } from './ngx-youtube-player-14.component';
import { YoutubePlayerService } from './ngx-youtube-player-14.service';

@NgModule({
  declarations: [YoutubePlayer14Component],
  imports: [],
  providers: [YoutubePlayerService],
  exports: [YoutubePlayer14Component]
})
export class NgxYoutubePlayer14Module {
  static forRoot(): ModuleWithProviders<NgxYoutubePlayer14Module> {
    return {
      ngModule: NgxYoutubePlayer14Module,
      providers: [YoutubePlayerService]
    };
  }
}
