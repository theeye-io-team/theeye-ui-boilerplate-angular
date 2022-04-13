import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponentAlt } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponentAlt;
  let fixture: ComponentFixture<FooterComponentAlt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponentAlt ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponentAlt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
