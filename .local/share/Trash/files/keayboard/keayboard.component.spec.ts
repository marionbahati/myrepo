import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeayboardComponent } from './keayboard.component';

describe('KeayboardComponent', () => {
  let component: KeayboardComponent;
  let fixture: ComponentFixture<KeayboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeayboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeayboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
