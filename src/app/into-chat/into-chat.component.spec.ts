import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoChatComponent } from './into-chat.component';

describe('IntoChatComponent', () => {
  let component: IntoChatComponent;
  let fixture: ComponentFixture<IntoChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntoChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntoChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
