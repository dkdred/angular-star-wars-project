import { TestBed } from '@angular/core/testing';

import { InMemroryCategoriesService } from './in-memrory-categories.service';

describe('InMemroryCategoriesService', () => {
  let service: InMemroryCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemroryCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
