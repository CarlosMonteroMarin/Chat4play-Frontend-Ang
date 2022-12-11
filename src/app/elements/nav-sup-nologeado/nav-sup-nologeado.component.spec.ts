import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSupNologeadoComponent } from './nav-sup-nologeado.component';

describe('NavSupNologeadoComponent', () => {
  let component: NavSupNologeadoComponent;
  let fixture: ComponentFixture<NavSupNologeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSupNologeadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSupNologeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
