import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVideojuegoComponent } from './edit-videojuego.component';

describe('EditVideojuegoComponent', () => {
  let component: EditVideojuegoComponent;
  let fixture: ComponentFixture<EditVideojuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVideojuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
