import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyinfoComponent } from './pharmacyinfo.component';

describe('PharmacyinfoComponent', () => {
  let component: PharmacyinfoComponent;
  let fixture: ComponentFixture<PharmacyinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
