import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersRangeComponent } from './beers-range.component';

describe('BeersRangeComponent', () => {
  let component: BeersRangeComponent;
  let fixture: ComponentFixture<BeersRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeersRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeersRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
