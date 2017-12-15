import { TestBed, inject } from '@angular/core/testing';

import { NewTicketServiceService } from './new-ticket-service.service';

describe('NewTicketServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewTicketServiceService]
    });
  });

  it('should be created', inject([NewTicketServiceService], (service: NewTicketServiceService) => {
    expect(service).toBeTruthy();
  }));
});
