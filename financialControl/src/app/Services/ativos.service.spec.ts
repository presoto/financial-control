import { TestBed, inject } from '@angular/core/testing';

import { AtivosService } from './ativos.service';

describe('AtivosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtivosService]
    });
  });

  it('should be created', inject([AtivosService], (service: AtivosService) => {
    expect(service).toBeTruthy();
  }));
});
