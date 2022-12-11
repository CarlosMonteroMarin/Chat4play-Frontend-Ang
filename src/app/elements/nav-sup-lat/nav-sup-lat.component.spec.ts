import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSupLatComponent } from './nav-sup-lat.component';

describe('NavSupLatComponent', () => {
  let component: NavSupLatComponent;
  let fixture: ComponentFixture<NavSupLatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSupLatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSupLatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
