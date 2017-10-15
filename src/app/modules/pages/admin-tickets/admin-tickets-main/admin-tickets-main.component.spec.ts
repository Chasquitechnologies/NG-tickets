import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketsMainComponent } from './admin-tickets-main.component';

describe('AdminTicketsMainComponent', () => {
  let component: AdminTicketsMainComponent;
  let fixture: ComponentFixture<AdminTicketsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
