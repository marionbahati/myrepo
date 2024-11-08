import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngTablesComponent } from './ang-tables.component';

describe('AngTablesComponent', () => {
  let component: AngTablesComponent;
  let fixture: ComponentFixture<AngTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
