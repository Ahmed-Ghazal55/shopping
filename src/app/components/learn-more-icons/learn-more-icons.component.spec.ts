import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreIconsComponent } from './learn-more-icons.component';

describe('LearnMoreIconsComponent', () => {
  let component: LearnMoreIconsComponent;
  let fixture: ComponentFixture<LearnMoreIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnMoreIconsComponent]
    });
    fixture = TestBed.createComponent(LearnMoreIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
