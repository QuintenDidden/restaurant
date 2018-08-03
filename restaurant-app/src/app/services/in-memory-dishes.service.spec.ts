import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDishesService } from './in-memory-dishes.service';

describe('InMemoryDishesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDishesService]
    });
  });

  it('should be created', inject([InMemoryDishesService], (service: InMemoryDishesService) => {
    expect(service).toBeTruthy();
  }));
});
