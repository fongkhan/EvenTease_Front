import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPublicComponent } from './event-public.component';

describe('EventPublicComponent', () => {
  let component: EventPublicComponent;
  let fixture: ComponentFixture<EventPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
