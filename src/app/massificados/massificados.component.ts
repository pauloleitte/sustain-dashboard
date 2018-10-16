import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../dashboard/dashboard.service";

@Component({
  selector: 'hp-massificados',
  templateUrl: './massificados.component.html',
  styles: []
})
export class MassificadosComponent implements OnInit {

  listaDeChamadosMassificado = [
    {
      Titulo: "",
      IdIncidente: "",
      Prioridade: "",
      Status: "",
      DataAbertura: "", 
      DataNextBreachOLA: ""
    }
  ];
  constructor(private serviceDashboard: DashboardService) { }

  ngOnInit() {
    this.serviceDashboard.listar(7).subscribe(chamadosApi => {
      this.listaDeChamadosMassificado = chamadosApi.Table
    });
  }

}
