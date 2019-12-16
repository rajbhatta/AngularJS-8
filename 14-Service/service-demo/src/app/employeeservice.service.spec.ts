import { TestBed } from '@angular/core/testing';

import { EmployeeserviceService } from './employeeservice.service';

describe('EmployeeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeserviceService = TestBed.get(EmployeeserviceService);
    expect(service).toBeTruthy();
  });
});
