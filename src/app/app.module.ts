import { BrowserModule } from '@angular/platform-browser';
import { DatePipe,DecimalPipe } from '@angular/common'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ModuloRoteamento } from './app.routing.module';
import { AutomovelComponent } from './automovel/automovel.component';
import { MassificadosComponent } from './massificados/massificados.component';
import { ChartBarsComponent } from './chart-bars/chart-bars.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    CardComponent,
    AutomovelComponent,
    MassificadosComponent,
    ChartBarsComponent,
    SidebarComponent,
    NavbarComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModuloRoteamento,
    ChartsModule
  ],
  providers: [
    DashboardService,
    DatePipe,
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
