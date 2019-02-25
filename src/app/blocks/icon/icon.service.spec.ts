import {inject, TestBed} from '@angular/core/testing';

import {AppIconService} from './icon.service';

describe('IconService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppIconService]
    });
  });

  it('should be created', inject([AppIconService], (service: AppIconService) => {
    expect(service)
      .toBeTruthy();
  }));
});
