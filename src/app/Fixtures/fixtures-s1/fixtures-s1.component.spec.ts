import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesS1Component } from './fixtures-s1.component';

describe('FixturesS1Component', () => {
  let component: FixturesS1Component;
  let fixture: ComponentFixture<FixturesS1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixturesS1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturesS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
