import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilkommenComponent } from './wilkommen.component';

describe('WilkommenComponent', () => {
  let component: WilkommenComponent;
  let fixture: ComponentFixture<WilkommenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WilkommenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WilkommenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
