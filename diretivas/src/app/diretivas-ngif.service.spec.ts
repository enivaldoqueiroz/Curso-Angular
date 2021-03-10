import { TestBed } from '@angular/core/testing';

import { DiretivasNgifService } from './diretivas-ngif.service';

describe('DiretivasNgifService', () => {
  let service: DiretivasNgifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretivasNgifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
