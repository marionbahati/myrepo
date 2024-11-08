import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarstedtMarkeComponent } from './sarstedt-marke.component';

describe('SarstedtMarkeComponent', () => {
  let component: SarstedtMarkeComponent;
  let fixture: ComponentFixture<SarstedtMarkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SarstedtMarkeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SarstedtMarkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
