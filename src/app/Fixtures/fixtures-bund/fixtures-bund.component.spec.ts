import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesBundComponent } from './fixtures-bund.component';

describe('FixturesBundComponent', () => {
  let component: FixturesBundComponent;
  let fixture: ComponentFixture<FixturesBundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixturesBundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturesBundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
