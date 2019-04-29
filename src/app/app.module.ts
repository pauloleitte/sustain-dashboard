import { BrowserModule } from '@angular/platform-browser';
import { DatePipe,DecimalPipe } from '@angular/common'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { FooterComponent } from './footer/footer.component';
import { ModuloRoteamento } from './app.routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { ChamadoComponent } from './chamado/chamado.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    ListComponent,
    ChamadoComponent
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
