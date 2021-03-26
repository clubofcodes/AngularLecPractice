import { TestBed } from '@angular/core/testing';

import { NodejsApiService } from './nodejs-api.service';

describe('NodejsApiService', () => {
  let service: NodejsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodejsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
