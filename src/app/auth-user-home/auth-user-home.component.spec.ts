import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserHomeComponent } from './auth-user-home.component';

describe('AuthUserHomeComponent', () => {
  let component: AuthUserHomeComponent;
  let fixture: ComponentFixture<AuthUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthUserHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
