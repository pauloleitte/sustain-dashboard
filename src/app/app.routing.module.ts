import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AutomovelComponent } from "./automovel/automovel.component";
import { MassificadosComponent } from "./massificados/massificados.component";
import { ChartBarsComponent } from "./chart-bars/chart-bars.component";
import { ListComponent } from "./list/list.component";
import { ChamadoComponent } from "./chamado/chamado.component";


const rotas: Routes = [
  { path: "dashboard", component: DashboardComponent },
  //{ path: "automovel", component: AutomovelComponent },
  //{ path: "massificado", component: MassificadosComponent },
  //{ path: "chart", component: ChartBarsComponent },
  {path: "chamado", component: ChamadoComponent},
  {path: "lista", component: ListComponent },
  {path: "", component: DashboardComponent },
  { path: "**", redirectTo: "" }
];

export const ModuloRoteamento = RouterModule.forRoot(rotas);
