import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFormatterComponent } from './link-formatter.component';

describe('LinkFormatterComponent', () => {
  let component: LinkFormatterComponent;
  let fixture: ComponentFixture<LinkFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
