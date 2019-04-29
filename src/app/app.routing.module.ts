import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListComponent } from "./list/list.component";
import { ChamadoComponent } from "./chamado/chamado.component";


const rotas: Routes = [
  {path: "dashboard", component: DashboardComponent },
  {path: "chamado", component: ChamadoComponent},
  {path: "lista", component: ListComponent },
  {path: "", component: DashboardComponent },
  { path: "**", redirectTo: "" }
];

export const ModuloRoteamento = RouterModule.forRoot(rotas);
