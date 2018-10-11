import { TestBed } from '@angular/core/testing';

import { SvInterceptorService } from './sv-interceptor.service';

describe('SvInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SvInterceptorService = TestBed.get(SvInterceptorService);
    expect(service).toBeTruthy();
  });
});
