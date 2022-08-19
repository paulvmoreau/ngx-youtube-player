import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlayer11Component } from './ngx-youtube-player.component';

describe('NgxYoutubePlayerComponent', () => {
  let component: YoutubePlayer11Component;
  let fixture: ComponentFixture<YoutubePlayer11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubePlayer11Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePlayer11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });
});
