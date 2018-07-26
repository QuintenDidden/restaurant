import { TestBed, inject } from '@angular/core/testing';

import { InMemoryTableService } from './in-memory-table.service';

describe('InMemoryTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryTableService]
    });
  });

  it('should be created', inject([InMemoryTableService], (service: InMemoryTableService) => {
    expect(service).toBeTruthy();
  }));
});
