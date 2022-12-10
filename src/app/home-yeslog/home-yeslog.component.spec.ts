import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeYeslogComponent } from './home-yeslog.component';

describe('HomeYeslogComponent', () => {
  let component: HomeYeslogComponent;
  let fixture: ComponentFixture<HomeYeslogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeYeslogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeYeslogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
