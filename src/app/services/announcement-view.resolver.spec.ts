import { TestBed } from '@angular/core/testing';

import { AnnouncementViewResolver } from './announcement-view.resolver';

describe('AnnouncementViewResolver', () => {
  let resolver: AnnouncementViewResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AnnouncementViewResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
