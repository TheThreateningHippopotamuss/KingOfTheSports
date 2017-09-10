/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TableGuardService } from './tableGuard.service';

describe('Service: TableGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableGuardService]
    });
  });

  it('should ...', inject([TableGuardService], (service: TableGuardService) => {
    expect(service).toBeTruthy();
  }));
});