import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketMainComponent } from './new-ticket-main.component';

describe('NewTicketMainComponent', () => {
  let component: NewTicketMainComponent;
  let fixture: ComponentFixture<NewTicketMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTicketMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTicketMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
