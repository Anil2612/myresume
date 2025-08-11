import { TestBed } from '@angular/core/testing';

import { RouteMiddlewareGuard } from './route-middleware.guard';

describe('RouteMiddlewareGuard', () => {
  let guard: RouteMiddlewareGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteMiddlewareGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
