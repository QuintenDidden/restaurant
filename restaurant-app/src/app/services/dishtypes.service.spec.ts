import { TestBed, inject } from '@angular/core/testing';

import { DishtypesService } from './dishtypes.service';

describe('DishtypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishtypesService]
    });
  });

  it('should be created', inject([DishtypesService], (service: DishtypesService) => {
    expect(service).toBeTruthy();
  }));
});
