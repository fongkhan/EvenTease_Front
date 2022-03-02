import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAchatCreationComponent } from './liste-achat-creation.component';

describe('ListeAchatCreationComponent', () => {
  let component: ListeAchatCreationComponent;
  let fixture: ComponentFixture<ListeAchatCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAchatCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAchatCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
