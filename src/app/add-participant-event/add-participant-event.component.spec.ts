import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParticipantEventComponent } from './add-participant-event.component';

describe('AddParticipantEventComponent', () => {
  let component: AddParticipantEventComponent;
  let fixture: ComponentFixture<AddParticipantEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParticipantEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParticipantEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
