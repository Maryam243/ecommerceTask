import { TestBed } from '@angular/core/testing';

import { ServicsProductsService } from './servics-products.service';

describe('ServicsProductsService', () => {
  let service: ServicsProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicsProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
