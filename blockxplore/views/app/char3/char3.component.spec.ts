import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Char3Component } from './char3.component';

describe('Char3Component', () => {
  let component: Char3Component;
  let fixture: ComponentFixture<Char3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Char3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Char3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
