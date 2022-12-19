import { TestBed } from '@angular/core/testing';

import { PartyUsuarioService } from './party-usuario.service';

describe('PartyUsuarioService', () => {
  let service: PartyUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
