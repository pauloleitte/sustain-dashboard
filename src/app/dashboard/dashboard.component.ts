import { Component, OnInit } from "@angular/core";
import { DecimalPipe, DatePipe } from '@angular/common';
import { DashboardService } from "../dashboard/dashboard.service";
import { async } from "@angular/core/testing";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { draw, generate } from 'patternomaly'

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
      text: 'Chamados Abertos'
    }
  }


  public barChartOptionsF = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Chamados Fechados'
    }
  }

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [{}];

  public barChartLabelsF = [];
  public barChartTypeF = 'bar';
  public barChartLegendF = true;
  public barChartDataF = [{}];

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

    //Chamados Fechados Diario
    this.serviceDashboard.chamados(12)
      .subscribe(chamadosApi => {
        chamadosApi
          .map(async chamado => {
            await this.barChartLabelsF.push(this.datepipe.transform(chamado.DataFechamento, 'dd/MM'))
            await this.listChamadosFechadosDiario.push(chamado.ChamadosFechados)
          })
      })

    //Chamados Abertos Diario
    this.serviceDashboard.chamados(15)
      .subscribe(chamadosApi => {
        chamadosApi
          .map(async chamado => {
            await this.barChartLabels.push(this.datepipe.transform(chamado.DataAbertura, 'dd/MM'))
            await this.listChamadosAbertosDiario.push(chamado.ChamadosAbertos)
          })
      })

    //Chamados Mensal Fechados
    this.serviceDashboard.chamados(13)
      .subscribe(chamadosApi => {
        chamadosApi
          .map(async chamado => {
            await this.barChartLabelsM.push(chamado.MesFechamento)
            await this.listChamadosFechadosMensal.push(chamado.ChamadosFechados)
          })
      })

    //Chamados Mensal Abertos
    this.serviceDashboard.chamados(16)
      .subscribe(chamadosApi => {
        chamadosApi
          .map(async chamado => {
            await this.listChamadosAbertosMensal.push(chamado.ChamadosAbertos)
          })
      })

    this.barChartData = [
      {
        data: this.listChamadosAbertosDiario, label: 'Abertos'
        // backgroundColor: [
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000'
        // ],
        // borderColor: [
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000'
        // ],
        // hoverBackgroundColor: [
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000'
        // ]
      }
    ]

    this.barChartDataF = [
      {
        data: this.listChamadosFechadosDiario, label: 'Fechados'
        // backgroundColor: [
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000'
        // ],
        // borderColor: [
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000'
        // ],
        // hoverBackgroundColor: [
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000'
        // ]
      }
    ]

    this.barChartDataM = [
      {
        data: this.listChamadosAbertosMensal, label: 'Abertos'
        // backgroundColor: [
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000'
        // ],
        // borderColor: [
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000'
        // ],
        // hoverBackgroundColor: [
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000'
        // ]
      },
      {
        data: this.listChamadosFechadosMensal, label: 'Fechados'
        // backgroundColor: [
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000'
        // ],
        // borderColor: [
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000'
        // ],
        // hoverBackgroundColor: [
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000',
        //   '#000000',
        //   '#FF0000'
        // ]
      }
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