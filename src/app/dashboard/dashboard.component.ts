import { Component, OnInit } from "@angular/core";
import { DashboardService } from "./dashboard.service";

@Component({
  selector: "hp-dashboard",
  templateUrl: "./dashboard.component.html",
  styles: []
})
export class DashboardComponent implements OnInit {
  listaDeChamadosPorFuncionarioMensal = [{
    NomeProfissional: '',
    ChamadosFechados: ''
  }];
  listaDeChamadosPorFuncionarioDiario = [{
    NomeProfissional: '',
    ChamadosFechados: ''
  }];

  constructor(private serviceDashboard: DashboardService) {}

  ngOnInit() {
    this.serviceDashboard.listar(7).subscribe(chamadosApi => {
      this.listaDeChamadosPorFuncionarioMensal = chamadosApi.Table;
    });
    this.serviceDashboard.listar(6).subscribe(chamadosApi => {
      this.listaDeChamadosPorFuncionarioDiario = chamadosApi.Table;
    });
  }
}
