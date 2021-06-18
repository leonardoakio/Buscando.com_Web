import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCvComponent } from './footer-cv.component';

describe('FooterCvComponent', () => {
  let component: FooterCvComponent;
  let fixture: ComponentFixture<FooterCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
