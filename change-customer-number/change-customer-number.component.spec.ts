import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCustomerNumberComponent } from './change-customer-number.component';

describe('ChangeCustomerNumberComponent', () => {
  let component: ChangeCustomerNumberComponent;
  let fixture: ComponentFixture<ChangeCustomerNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCustomerNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCustomerNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
