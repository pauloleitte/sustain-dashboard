import { Component, OnInit } from "@angular/core";
import { DashboardService } from "./dashboard.service";
import { HttpClient } from "@angular/common/http";

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
    this.serviceDashboard.listar(5).subscribe(chamadosApi => {
      this.listaDeChamadosPorFuncionarioMensal = chamadosApi.Table;
    });
    this.serviceDashboard.listar(2).subscribe(chamadosApi => {
      this.listaDeChamadosPorFuncionarioDiario = chamadosApi.Table;
    });
  }
}
