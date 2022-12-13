import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVideojuegoComponent } from './add-videojuego.component';

describe('AddVideojuegoComponent', () => {
  let component: AddVideojuegoComponent;
  let fixture: ComponentFixture<AddVideojuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVideojuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
