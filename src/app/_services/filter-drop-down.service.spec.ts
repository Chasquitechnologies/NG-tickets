import { TestBed, inject } from '@angular/core/testing';

import { FilterDropDownService } from './filter-drop-down.service';

describe('FilterDropDownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterDropDownService]
    });
  });

  it('should be created', inject([FilterDropDownService], (service: FilterDropDownService) => {
    expect(service).toBeTruthy();
  }));
});
