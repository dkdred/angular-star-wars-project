import { TestBed } from '@angular/core/testing';

import { GetApiSwService } from './get-api-sw.service';

describe('GetApiSwService', () => {
  let service: GetApiSwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApiSwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
