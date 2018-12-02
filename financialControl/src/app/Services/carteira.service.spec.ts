import { TestBed, inject } from '@angular/core/testing';

import { CarteiraService } from './carteira.service';

describe('CarteiraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarteiraService]
    });
  });

  it('should be created', inject([CarteiraService], (service: CarteiraService) => {
    expect(service).toBeTruthy();
  }));
});
