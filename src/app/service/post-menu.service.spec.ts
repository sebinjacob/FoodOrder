import { TestBed, inject } from '@angular/core/testing';

import { PostMenuService } from './post-menu.service';

describe('PostMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostMenuService]
    });
  });

  it('should be created', inject([PostMenuService], (service: PostMenuService) => {
    expect(service).toBeTruthy();
  }));
});
