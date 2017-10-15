import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketsDetailsComponent } from './admin-tickets-details.component';

describe('AdminTicketsDetailsComponent', () => {
  let component: AdminTicketsDetailsComponent;
  let fixture: ComponentFixture<AdminTicketsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
