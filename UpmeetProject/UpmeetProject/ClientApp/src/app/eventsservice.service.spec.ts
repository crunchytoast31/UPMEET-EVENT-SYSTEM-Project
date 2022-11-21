import { TestBed } from '@angular/core/testing';

import { EventsserviceService } from './eventsservice.service';

describe('EventsserviceService', () => {
  let service: EventsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
