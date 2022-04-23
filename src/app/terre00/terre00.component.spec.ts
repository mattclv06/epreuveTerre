import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Terre00Component } from './terre00.component';

describe('Terre00Component', () => {
  let component: Terre00Component;
  let fixture: ComponentFixture<Terre00Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Terre00Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Terre00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
