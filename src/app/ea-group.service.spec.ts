import { TestBed } from '@angular/core/testing';

import { EaGroupService } from './ea-group.service';

describe('EaGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EaGroupService = TestBed.get(EaGroupService);
    expect(service).toBeTruthy();
  });
});
