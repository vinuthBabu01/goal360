import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesPlComponent } from './fixtures-pl.component';

describe('FixturesPlComponent', () => {
  let component: FixturesPlComponent;
  let fixture: ComponentFixture<FixturesPlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixturesPlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturesPlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
