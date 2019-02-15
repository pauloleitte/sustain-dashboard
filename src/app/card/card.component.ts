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
    this.serviceDashboard.chamados(10).subscribe(chamadosApi =>{
      this.chamadosDiarioFechados = chamadosApi[0].chamadosFechadosDiario
      console.log(chamadosApi[0].chamadosFechadosDiario)
    })

    this.serviceDashboard.chamados(8).subscribe(chamadosApi =>{
      this.chamadosMensalFechados = chamadosApi[0].chamadosMensalFechados
    })

    this.serviceDashboard.chamados(11).subscribe(chamadosApi =>{
      this.chamadosDiarioAbertos = chamadosApi[0].chamadosAbertoDiario
    })

    this.serviceDashboard.chamados(9).subscribe(chamadosApi =>{
      this.chamadosMensalAbertos = chamadosApi[0].chamadosAbertoMensal
    })

  }

}
