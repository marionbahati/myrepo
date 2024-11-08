import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialfinalComponent } from './trialfinal.component';

describe('TrialfinalComponent', () => {
  let component: TrialfinalComponent;
  let fixture: ComponentFixture<TrialfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialfinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrialfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
