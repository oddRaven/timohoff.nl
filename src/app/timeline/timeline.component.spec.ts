import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineComponent } from './timeline.component';
import { Timeline } from '../models/timeline';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    component.timeline = new Timeline({ phases: [] });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
