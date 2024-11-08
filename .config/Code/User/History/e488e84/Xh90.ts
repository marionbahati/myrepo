import { TestBed } from '@angular/core/testing';

import { CourseGuardServiceService } from './course-guard-service.service';

describe('CourseGuardServiceService', () => {
  let service: CourseGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
