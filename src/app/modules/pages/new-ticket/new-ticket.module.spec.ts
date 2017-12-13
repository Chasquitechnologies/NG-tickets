import { NewTicketModule } from './new-ticket.module';

describe('NewTicketModule', () => {
  let newTicketModule: NewTicketModule;

  beforeEach(() => {
    newTicketModule = new NewTicketModule();
  });

  it('should create an instance', () => {
    expect(newTicketModule).toBeTruthy();
  });
});
