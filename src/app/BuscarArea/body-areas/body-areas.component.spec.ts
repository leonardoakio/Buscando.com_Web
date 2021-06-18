import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAreasComponent } from './body-areas.component';

describe('BodyAreasComponent', () => {
  let component: BodyAreasComponent;
  let fixture: ComponentFixture<BodyAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
