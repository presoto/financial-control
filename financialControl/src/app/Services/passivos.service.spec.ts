import { TestBed, inject } from '@angular/core/testing';

import { PassivosService } from './passivos.service';

describe('PassivosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassivosService]
    });
  });

  it('should be created', inject([PassivosService], (service: PassivosService) => {
    expect(service).toBeTruthy();
  }));
});
