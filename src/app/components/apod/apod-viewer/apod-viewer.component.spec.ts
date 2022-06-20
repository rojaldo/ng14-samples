import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodViewerComponent } from './apod-viewer.component';

describe('ApodViewerComponent', () => {
  let component: ApodViewerComponent;
  let fixture: ComponentFixture<ApodViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApodViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
