import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyleftmenuComponent } from './pharmacyleftmenu.component';

describe('PharmacyleftmenuComponent', () => {
  let component: PharmacyleftmenuComponent;
  let fixture: ComponentFixture<PharmacyleftmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyleftmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyleftmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
