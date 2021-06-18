import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCvComponent } from './body-cv.component';

describe('BodyCvComponent', () => {
  let component: BodyCvComponent;
  let fixture: ComponentFixture<BodyCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
