import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VozacComponent } from './vozac.component';

describe('VozacComponent', () => {
  let component: VozacComponent;
  let fixture: ComponentFixture<VozacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VozacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VozacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
