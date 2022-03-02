import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyEventComponent } from './edit-my-event.component';

describe('EditMyEventComponent', () => {
  let component: EditMyEventComponent;
  let fixture: ComponentFixture<EditMyEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMyEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
