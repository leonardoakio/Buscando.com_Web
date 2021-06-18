import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCadastroEmpresa3Component } from './body-cadastro-empresa3.component';

describe('BodyCadastroEmpresa3Component', () => {
  let component: BodyCadastroEmpresa3Component;
  let fixture: ComponentFixture<BodyCadastroEmpresa3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCadastroEmpresa3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCadastroEmpresa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
