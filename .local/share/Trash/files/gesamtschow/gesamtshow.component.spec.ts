import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesamtshowComponent } from './gesamtshow.component';

describe('GesamtshowComponent', () => {
  let component: GesamtshowComponent;
  let fixture: ComponentFixture<GesamtshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GesamtshowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GesamtshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
