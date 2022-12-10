import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNologComponent } from './home-nolog.component';

describe('HomeNologComponent', () => {
  let component: HomeNologComponent;
  let fixture: ComponentFixture<HomeNologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNologComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
