import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ModuloRoteamento } from './app.routing.module';
import { AutomovelComponent } from './automovel/automovel.component';
import { MassificadosComponent } from './massificados/massificados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    CardComponent,
    AutomovelComponent,
    MassificadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModuloRoteamento,
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
