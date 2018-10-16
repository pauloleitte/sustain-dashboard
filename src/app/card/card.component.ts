import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../dashboard/dashboard.service";

@Component({
  selector: 'hp-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

  chamadosMensalFechados = 0
  chamadosMensalAbertos = 0
  chamadosDiarioFechados = 0
  chamadosDiarioAbertos = 0

  constructor(private serviceDashboard: DashboardService) { }

  ngOnInit() {
    this.serviceDashboard.chamados(0).subscribe(chamadosApi =>{
      this.chamadosDiarioFechados = chamadosApi.Table[0].ChamadosFechados
    })

    this.serviceDashboard.chamados(3).subscribe(chamadosApi =>{
      this.chamadosMensalFechados = chamadosApi.Table[0].ChamadosFechados
    })

    this.serviceDashboard.chamados(1).subscribe(chamadosApi =>{
      this.chamadosDiarioAbertos = chamadosApi.Table[0].ChamadosAbertos
    })

    this.serviceDashboard.chamados(4).subscribe(chamadosApi =>{
      this.chamadosMensalAbertos = chamadosApi.Table[0].ChamadosAbertos
    })

  }

}
