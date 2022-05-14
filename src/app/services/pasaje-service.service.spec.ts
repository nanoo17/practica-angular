import { TestBed } from '@angular/core/testing';

import { PasajeService } from './pasaje-service.service';

describe('PasajeServiceService', () => {
  let service: PasajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
