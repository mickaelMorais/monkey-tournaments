import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HeaderComponent } from './components/home/header/header.component';
import { MainComponent } from './components/home/main/main.component';
import { CardComponent } from './components/home/main/section/card/card.component';
import { SectionComponent } from './components/home/main/section/section.component';
import { ChaveamentoComponent } from './components/home/chaveamento/chaveamento.component';
import { PartidaComponent } from './components/home/chaveamento/partida/partida.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    HeaderComponent,
    MainComponent,
    CardComponent,
    SectionComponent,
    ChaveamentoComponent,
    PartidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
