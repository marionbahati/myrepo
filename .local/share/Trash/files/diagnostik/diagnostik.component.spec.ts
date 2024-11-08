import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnostikComponent } from './diagnostik.component';

describe('DiagnostikComponent', () => {
  let component: DiagnostikComponent;
  let fixture: ComponentFixture<DiagnostikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagnostikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagnostikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
