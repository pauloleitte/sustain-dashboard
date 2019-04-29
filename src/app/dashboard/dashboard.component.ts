import { Component, OnInit } from "@angular/core";
import { DecimalPipe, DatePipe } from '@angular/common';
import { DashboardService } from "../dashboard/dashboard.service";

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
  listChamadosAbertosMensal = []
  listChamadosFechadosMensal = []
  listChamadosAbertosDiario = []
  listChamadosFechadosDiario = []


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Chamados Fechados/Abertos'
    }
  }

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [{}];

  public barChartLabelsM = [];
  public barChartTypeM = 'bar';
  public barChartLegendM = true;
  public barChartDataM = [{}];

  constructor(
    private serviceDashboard: DashboardService,
    private decimalpipe: DecimalPipe,
    public datepipe: DatePipe) { }

  ngOnInit() {

    // this.serviceDashboard.chamados(12)
    // .subscribe(chamadosApi => {
    //   chamadosApi
    //   .map(chamado => {
    //     this.barChartLabels.push(this.datepipe.transform(chamado.DataFechamento, 'dd/MM'))
    //     this.barChartData[0].data.push(chamado.ChamadosFechados)
    //   })
    // })

    // this.serviceDashboard.chamados(13)
    // .subscribe(chamadosApi => {
    //   chamadosApi
    //   .map(chamado => {
    //     this.barChartLabelsM.push(chamado.MesFechamento)
    //     this.barChartDataM[0].data.push(chamado.ChamadosFechados)
    //   })
    // })

    this.serviceDashboard.chamados(12)
    .subscribe(chamadosApi =>{
        chamadosApi
        .map(async chamado =>{
          //await this.barChartLabels.push(this.datepipe.transform(chamado.DataFechamento, 'dd/MM'))
          await this.listChamadosFechadosDiario.push(chamado.ChamadosFechados)
        })
    })

    
    this.serviceDashboard.chamados(15)
    .subscribe(chamadosApi =>{
        chamadosApi
        .map(async chamado =>{
          await this.barChartLabels.push(this.datepipe.transform(chamado.DataAbertura, 'dd/MM'))
          await this.listChamadosAbertosDiario.push(chamado.ChamadosAbertos)
        })
    })

  
    this.serviceDashboard.chamados(13)
    .subscribe(chamadosApi =>{
        chamadosApi
        .map(async chamado =>{
         await this.barChartLabelsM.push(chamado.MesFechamento)
        await this.listChamadosFechadosMensal.push(chamado.ChamadosFechados)
        })
    })

      
    this.serviceDashboard.chamados(16)
    .subscribe(chamadosApi =>{
        chamadosApi
        .map(async chamado =>{
          await this.listChamadosAbertosMensal.push(chamado.ChamadosAbertos)
        })
    })

    this.barChartData = [
      {data: this.listChamadosAbertosDiario, label: 'Abertos'},
      {data: this.listChamadosFechadosDiario, label: 'Fechados'}
    ]

    this.barChartDataM = [
      {data: this.listChamadosAbertosMensal, label: 'Abertos'},
      {data: this.listChamadosFechadosMensal, label: 'Fechados'}
    ]


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
