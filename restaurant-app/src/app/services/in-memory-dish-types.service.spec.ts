import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDishTypesService } from './in-memory-dish-types.service';

describe('InMemoryDishTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDishTypesService]
    });
  });

  it('should be created', inject([InMemoryDishTypesService], (service: InMemoryDishTypesService) => {
    expect(service).toBeTruthy();
  }));
});
