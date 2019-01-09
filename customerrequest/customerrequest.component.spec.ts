import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrequestComponent } from './customerrequest.component';

describe('CustomerrequestComponent', () => {
  let component: CustomerrequestComponent;
  let fixture: ComponentFixture<CustomerrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
