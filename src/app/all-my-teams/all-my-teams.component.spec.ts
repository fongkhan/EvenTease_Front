import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMyTeamsComponent } from './all-my-teams.component';

describe('AllMyTeamsComponent', () => {
  let component: AllMyTeamsComponent;
  let fixture: ComponentFixture<AllMyTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMyTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMyTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
