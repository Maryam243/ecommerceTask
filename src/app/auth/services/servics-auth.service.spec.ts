import { TestBed } from '@angular/core/testing';

import { ServicsAuthService } from './servics-auth.service';

describe('ServicsAuthService', () => {
  let service: ServicsAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicsAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
