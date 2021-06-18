import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Menu/header/header.component';
import { SlideComponent } from './Menu/slide/slide.component';
import { EmpresasComponent } from './Menu/empresas/empresas.component';
import { CidadesComponent } from './Menu/cidades/cidades.component';
import { AreasComponent } from './Menu/areas/areas.component';
import { RodapeComponent } from './Menu/rodape/rodape.component';
import { HeaderCvComponent } from './curriculo/header-cv/header-cv.component';
import { FooterCvComponent } from './curriculo/footer-cv/footer-cv.component';
import { BodyCvComponent } from './curriculo/body-cv/body-cv.component';
import { HeaderLoginComponent } from './Cadastro/header-login/header-login.component';
import { BodyLoginComponent } from './Cadastro/body-login/body-login.component';
import { FooterLoginComponent } from './Cadastro/footer-login/footer-login.component';
import { Body1Component } from './Cadastro1/body1/body1.component';
import { Footer1Component } from './Cadastro1/footer1/footer1.component';
import { Body2Component } from './Cadastro2/body2/body2.component';
import { Body3Component } from './Cadastro3/body3/body3.component';
import { Body4Component } from './Cadastro4/body4/body4.component';
import { BodyComponent } from './Login/body/body.component';
import { BodyCadastroEmpresaComponent } from './CadastroEmpresa/body-cadastro-empresa/body-cadastro-empresa.component';
import { BodyCadastroEmpresa3Component } from './CadastroEmpresa3/body-cadastro-empresa3/body-cadastro-empresa3.component';
import { BodyCadastroEmpresa2Component } from './CadastroEmpresa2/body-cadastro-empresa2/body-cadastro-empresa2.component';
import { BodyCadastroEmpresa1Component } from './CadastroEmpresa1/body-cadastro-empresa1/body-cadastro-empresa1.component';
import { BodyCidadesComponent } from './BuscarCidade/bodyCidades/body-cidades.component';
import { BodyAreasComponent } from './BuscarArea/body-areas/body-areas.component';
import { BodySaibaMaisComponent } from './SaibaMais/body-saiba-mais/body-saiba-mais.component';
import { IndexComponent } from './menu/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideComponent,
    EmpresasComponent,
    CidadesComponent,
    AreasComponent,
    RodapeComponent,
    HeaderCvComponent,
    FooterCvComponent,
    BodyCvComponent,
    HeaderLoginComponent,
    BodyLoginComponent,
    FooterLoginComponent,
    Body1Component,
    Footer1Component,
    Body2Component,
    Body3Component,
    Body4Component,
    BodyComponent,
    BodyCadastroEmpresaComponent,
    BodyCadastroEmpresa3Component,
    BodyCadastroEmpresa2Component,
    BodyCadastroEmpresa1Component,
    BodyCidadesComponent,
    BodyAreasComponent,
    BodySaibaMaisComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
