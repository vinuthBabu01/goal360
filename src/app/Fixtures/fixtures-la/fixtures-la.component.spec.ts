import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesLaComponent } from './fixtures-la.component';

describe('FixturesLaComponent', () => {
  let component: FixturesLaComponent;
  let fixture: ComponentFixture<FixturesLaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixturesLaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturesLaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
