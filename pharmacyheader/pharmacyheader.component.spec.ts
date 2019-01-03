import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyheaderComponent } from './pharmacyheader.component';

describe('PharmacyheaderComponent', () => {
  let component: PharmacyheaderComponent;
  let fixture: ComponentFixture<PharmacyheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
