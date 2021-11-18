import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLolComponent } from './page-lol.component';

describe('PageLolComponent', () => {
  let component: PageLolComponent;
  let fixture: ComponentFixture<PageLolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
