import { TestBed, inject } from '@angular/core/testing';

import { RedirectUrlService } from './redirect-url.service';

describe('RedirectUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedirectUrlService]
    });
  });

  it('should be created', inject([RedirectUrlService], (service: RedirectUrlService) => {
    expect(service).toBeTruthy();
  }));
});
