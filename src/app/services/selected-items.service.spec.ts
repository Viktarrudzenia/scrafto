import { TestBed } from '@angular/core/testing';

import { SelectedItemsService } from './selected-items.service';

describe('SelectedItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedItemsService = TestBed.get(SelectedItemsService);
    expect(service).toBeTruthy();
  });
});
