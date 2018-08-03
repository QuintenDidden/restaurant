import { TestBed, inject } from '@angular/core/testing';

import { InMemoryOrdersService } from './in-memory-orders.service';

describe('InMemoryOrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryOrdersService]
    });
  });

  it('should be created', inject([InMemoryOrdersService], (service: InMemoryOrdersService) => {
    expect(service).toBeTruthy();
  }));
});
