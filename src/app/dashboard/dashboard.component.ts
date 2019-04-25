import { Component, OnInit } from "@angular/core";
import { DashboardService } from "./dashboard.service";
import { DecimalPipe } from '@angular/common';

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

  constructor(
    private serviceDashboard: DashboardService,
    private decimalpipe : DecimalPipe) { }

  ngOnInit() {
    this.serviceDashboard.listar(7).subscribe(chamadosApi => {
      this.listaDeChamadosPorFuncionarioMensal = chamadosApi;
    });
    this.serviceDashboard.listar(6).subscribe(chamadosApi => {
      this.listaDeChamadosPorFuncionarioDiario = chamadosApi;
    });
  }
}
