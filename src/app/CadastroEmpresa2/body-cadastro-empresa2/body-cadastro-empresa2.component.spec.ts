import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCadastroEmpresa2Component } from './body-cadastro-empresa2.component';

describe('BodyCadastroEmpresa2Component', () => {
  let component: BodyCadastroEmpresa2Component;
  let fixture: ComponentFixture<BodyCadastroEmpresa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCadastroEmpresa2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCadastroEmpresa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
