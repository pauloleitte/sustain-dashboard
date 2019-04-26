import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { DashboardService } from "../dashboard/dashboard.service";
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'hp-chart-bars',
  templateUrl: './chart-bars.component.html',
  styles: []
})
export class ChartBarsComponent implements OnInit {

  constructor(private serviceDashboard: DashboardService,
    public datepipe: DatePipe) { }

    public barChartOptions: ChartOptions = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      }
    };

  public barChartPlugins = [pluginDataLabels];

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [], label: 'Dia' }
  ];

  public barChartLabelsM = [];
  public barChartTypeM = 'bar';
  public barChartLegendM = true;
  public barChartDataM = [{
    data: [], label: 'Mês'
  }];

  // public barChartDataM = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  // ];

  ngOnInit() {

    this.serviceDashboard.chamados(12).subscribe(chamadosApi => {
      chamadosApi.map(chamado => {
        this.barChartLabels.push(this.datepipe.transform(chamado.DataFechamento, 'dd/MM'))
        this.barChartData[0].data.push(chamado.ChamadosFechados)
      })
    })

    this.serviceDashboard.chamados(13).subscribe(chamadosApi => {
      chamadosApi.map(chamado => {
        this.barChartLabelsM.push(chamado.MesFechamento)
        this.barChartDataM[0].data.push(chamado.ChamadosFechados)
        
      })
    })


  }
}
