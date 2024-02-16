import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceOverviewComponent } from './experience-overview.component';

describe('ExperienceOverviewComponent', () => {
  let component: ExperienceOverviewComponent;
  let fixture: ComponentFixture<ExperienceOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
