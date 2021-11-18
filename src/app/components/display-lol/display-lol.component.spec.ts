import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLolComponent } from './display-lol.component';

describe('DisplayLolComponent', () => {
  let component: DisplayLolComponent;
  let fixture: ComponentFixture<DisplayLolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayLolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
