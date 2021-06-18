import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySaibaMaisComponent } from './body-saiba-mais.component';

describe('BodySaibaMaisComponent', () => {
  let component: BodySaibaMaisComponent;
  let fixture: ComponentFixture<BodySaibaMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodySaibaMaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySaibaMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
