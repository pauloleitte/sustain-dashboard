import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../dashboard/dashboard.service";

@Component({
  selector: 'hp-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  listaDeChamadosPorFuncionarioMensal = [{
    NomeProfissional: '',
    ChamadosFechados: ''
  }];
  listaDeChamadosPorFuncionarioDiario = [{
    NomeProfissional: '',
    ChamadosFechados: ''
  }];

  constructor(   private serviceDashboard: DashboardService) { }

  ngOnInit() {

    this.serviceDashboard.listar(7).subscribe(chamadosApi => {
      this.listaDeChamadosPorFuncionarioMensal = chamadosApi;
    });
    this.serviceDashboard.listar(6).subscribe(chamadosApi => {
      this.listaDeChamadosPorFuncionarioDiario = chamadosApi;
    });
  }

}
