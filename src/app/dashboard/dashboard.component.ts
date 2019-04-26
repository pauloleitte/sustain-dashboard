import { Component, OnInit } from "@angular/core";
import { DecimalPipe, DatePipe } from '@angular/common';
import { DashboardService } from "../dashboard/dashboard.service";
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: "hp-dashboard",
  templateUrl: "./dashboard.component.html",
  styles: []
})
export class DashboardComponent implements OnInit {

  chamadosMensalFechados = 0
  chamadosMensalAbertos = 0
  chamadosDiarioFechados = 0
  chamadosDiarioAbertos = 0


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Chamados Fechados'
    }
  }
  //public barChartPlugins = [pluginDataLabels];

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData = [
    {
      data: [],
      label: 'Fechados'
    }
  ];

  public barChartLabelsM = [];
  public barChartTypeM = 'bar';
  public barChartLegendM = false;
  public barChartDataM = [
    {
      data: [],
      label: 'Fechados'
    }
  ];

  constructor(
    private serviceDashboard: DashboardService,
    private decimalpipe: DecimalPipe,
    public datepipe: DatePipe) { }

  ngOnInit() {

    this.serviceDashboard.chamados(12)
    .subscribe(chamadosApi => {
      chamadosApi
      .map(chamado => {
        this.barChartLabels.push(this.datepipe.transform(chamado.DataFechamento, 'dd/MM'))
        this.barChartData[0].data.push(chamado.ChamadosFechados)
      })
    })

    this.serviceDashboard.chamados(13)
    .subscribe(chamadosApi => {
      chamadosApi
      .map(chamado => {
        this.barChartLabelsM.push(chamado.MesFechamento)
        this.barChartDataM[0].data.push(chamado.ChamadosFechados)
      })
    })

    this.serviceDashboard.chamados(10)
    .subscribe(chamadosApi => {
      this.chamadosDiarioFechados = chamadosApi[0].chamadosFechadosDiario
    })

    this.serviceDashboard.chamados(8)
    .subscribe(chamadosApi => {
      this.chamadosMensalFechados = chamadosApi[0].chamadosMensalFechados
    })

    this.serviceDashboard.chamados(11)
    .subscribe(chamadosApi => {
      this.chamadosDiarioAbertos = chamadosApi[0].chamadosAbertoDiario
    })

    this.serviceDashboard.chamados(9)
    .subscribe(chamadosApi => {
      this.chamadosMensalAbertos = chamadosApi[0].chamadosAbertoMensal
    })
  }
}
