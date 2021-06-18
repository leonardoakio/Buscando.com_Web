import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCadastroEmpresaComponent } from './body-cadastro-empresa.component';

describe('BodyCadastroEmpresaComponent', () => {
  let component: BodyCadastroEmpresaComponent;
  let fixture: ComponentFixture<BodyCadastroEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCadastroEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCadastroEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
