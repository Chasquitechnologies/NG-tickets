import { TestBed, inject } from '@angular/core/testing';

import { AdminTicketServiceService } from './admin-ticket-service.service';

describe('AdminTicketServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminTicketServiceService]
    });
  });

  it('should be created', inject([AdminTicketServiceService], (service: AdminTicketServiceService) => {
    expect(service).toBeTruthy();
  }));
});
