import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnRouterComponent } from './learn-router.component';

describe('LearnRouterComponent', () => {
  let component: LearnRouterComponent;
  let fixture: ComponentFixture<LearnRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnRouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
