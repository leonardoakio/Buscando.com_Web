import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCadastroEmpresa1Component } from './body-cadastro-empresa1.component';

describe('BodyCadastroEmpresa1Component', () => {
  let component: BodyCadastroEmpresa1Component;
  let fixture: ComponentFixture<BodyCadastroEmpresa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCadastroEmpresa1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCadastroEmpresa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
