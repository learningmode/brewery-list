import { TestBed } from '@angular/core/testing';

import { CustomhttpService } from './customhttp.service';

describe('CustomhttpService', () => {
  let service: CustomhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
