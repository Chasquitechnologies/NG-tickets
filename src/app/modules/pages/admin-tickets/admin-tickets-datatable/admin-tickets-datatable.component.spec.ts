import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketsDatatableComponent } from './admin-tickets-datatable.component';

describe('BaseDataAjaxComponent', () => {
  let component: AdminTicketsDatatableComponent;
  let fixture: ComponentFixture<AdminTicketsDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketsDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketsDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
