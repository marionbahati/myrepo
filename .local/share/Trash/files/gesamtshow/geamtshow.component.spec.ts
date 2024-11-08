import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeamtshowComponent } from './geamtshow.component';

describe('GeamtshowComponent', () => {
  let component: GeamtshowComponent;
  let fixture: ComponentFixture<GeamtshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeamtshowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeamtshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
