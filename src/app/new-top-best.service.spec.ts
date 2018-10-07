import { TestBed } from '@angular/core/testing';

import { NewTopBestService } from './new-top-best.service';

describe('NewTopBestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewTopBestService = TestBed.get(NewTopBestService);
    expect(service).toBeTruthy();
  });
});
