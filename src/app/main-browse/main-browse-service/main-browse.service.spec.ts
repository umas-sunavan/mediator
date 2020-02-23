import { TestBed } from '@angular/core/testing';

import { MainBrowseService } from './main-browse.service';

describe('MainBrowseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainBrowseService = TestBed.get(MainBrowseService);
    expect(service).toBeTruthy();
  });
});
