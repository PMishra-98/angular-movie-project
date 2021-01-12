import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdCarouselConfig } from './images.component';

describe('ImagesComponent', () => {
  let component: NgbdCarouselConfig;
  let fixture: ComponentFixture<NgbdCarouselConfig>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdCarouselConfig ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdCarouselConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
