import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BodyCidadesComponent} from './body-cidades.component';

describe('BodyCidadesComponent', () => {
  let component: BodyCidadesComponent;
  let fixture: ComponentFixture<BodyCidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyCidadesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
