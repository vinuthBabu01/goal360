import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesLeague1Component } from './fixtures-league1.component';

describe('FixturesLeague1Component', () => {
  let component: FixturesLeague1Component;
  let fixture: ComponentFixture<FixturesLeague1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixturesLeague1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturesLeague1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
