import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from './Login/body/body.component';
import {IndexComponent} from './Menu/index/index.component';
import {Body1Component} from './Cadastro1/body1/body1.component';
import {BodyLoginComponent} from './Cadastro/body-login/body-login.component';
import {Body2Component} from './Cadastro2/body2/body2.component';
import {Body3Component} from './Cadastro3/body3/body3.component';
import {Body4Component} from './Cadastro4/body4/body4.component';
import {BodyCvComponent} from './curriculo/body-cv/body-cv.component';
import {BodyCidadesComponent} from './BuscarCidade/bodyCidades/body-cidades.component';
import {BodyCadastroEmpresaComponent} from './CadastroEmpresa/body-cadastro-empresa/body-cadastro-empresa.component';
import {BodyCadastroEmpresa1Component} from './CadastroEmpresa1/body-cadastro-empresa1/body-cadastro-empresa1.component';
import {BodyCadastroEmpresa3Component} from './CadastroEmpresa3/body-cadastro-empresa3/body-cadastro-empresa3.component';
import {BodyCadastroEmpresa2Component} from './CadastroEmpresa2/body-cadastro-empresa2/body-cadastro-empresa2.component';
import {BodySaibaMaisComponent} from './SaibaMais/body-saiba-mais/body-saiba-mais.component';
import {BodyAreasComponent} from './BuscarArea/body-areas/body-areas.component';



const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'menu',
    component: IndexComponent
  },
  {
    path: 'login',
    component: BodyComponent
  },

  {
    path: 'register',
    component: BodyLoginComponent
  },
  {
    path: 'anunciarVaga',
    component: BodyCadastroEmpresaComponent
  },
  {
    path: 'cadastrarCurriculo',
    component: Body1Component
  },

  {
    path: 'acessar',
    component: IndexComponent
  },

  {
    path: 'queroMinhaVaga',
    component: Body1Component
  },

  {
    path: 'continuarCadastro',
    component: Body2Component
  },

  {
    path: 'continuarPcD',
    component: Body3Component
  },

  {
    path: 'finalizarCadastro',
    component: Body4Component
  },

  {
    path: 'visualizarCurriculo',
    component: BodyCvComponent
  },
  {
    path: 'vagasDisponiveis',
    component: BodyCidadesComponent
  },

  {
    path: 'cadastrarVaga',
    component: BodyCadastroEmpresa1Component
  },

  {
    path: 'continuarCadastroEmpresa',
    component: BodyCadastroEmpresa2Component
  },

  {
    path: 'finalizarVaga',
    component: BodyCadastroEmpresa3Component
  },

  {
    path: 'visualizarVaga',
    component: BodySaibaMaisComponent
  },

  {
    path: 'cadastrarOutraVaga',
    component: BodyCadastroEmpresa2Component
  },

  {
    path: 'buscaPorCidade',
    component: BodyCidadesComponent
  },

  {
    path: 'buscaPorArea',
    component: BodyAreasComponent
  },

  {
    path: 'saibaMais',
    component: BodySaibaMaisComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
