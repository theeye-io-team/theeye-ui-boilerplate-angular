import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentAlt } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponentAlt;
  let fixture: ComponentFixture<HeaderComponentAlt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponentAlt ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponentAlt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
