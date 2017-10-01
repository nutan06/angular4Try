import { TestBed, inject } from '@angular/core/testing';

import { BooksdataService } from './booksdata.service';

describe('BooksdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksdataService]
    });
  });

  it('should be created', inject([BooksdataService], (service: BooksdataService) => {
    expect(service).toBeTruthy();
  }));
});
