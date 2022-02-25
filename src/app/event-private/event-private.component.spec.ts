import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPrivateComponent } from './event-private.component';

describe('EventPrivateComponent', () => {
  let component: EventPrivateComponent;
  let fixture: ComponentFixture<EventPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPrivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
