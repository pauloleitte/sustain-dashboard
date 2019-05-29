import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../dashboard/dashboard.service";
import { DatePipe } from '@angular/common/'

@Component({
  selector: 'hp-chamado',
  templateUrl: './chamado.component.html',
  styles: []
})
export class ChamadoComponent implements OnInit {

  listChamadosAutomovel = [
    {
      Titulo: "",
      IdIncidente: "",
      Prioridade: "",
      Status: "",
      DataAbertura: "",
      DataNextBreachOLA: ""
    }
  ]
  listChamadosMassificados = [
    {
      Titulo: "",
      IdIncidente: "",
      Prioridade: "",
      Status: "",
      DataAbertura: "",
      DataNextBreachOLA: ""
    }
  ]
  listChamadosCargas = [
    {
      Titulo: "",
      IdIncidente: "",
      Prioridade: "",
      Status: "",
      DataAbertura: "",
      DataNextBreachOLA: ""
    }
  ]
  listChamadosCentralBonus = [
    {
      Titulo: "",
      IdIncidente: "",
      Prioridade: "",
      Status: "",
      DataAbertura: "",
      DataNextBreachOLA: ""
    }
  ]
  listChamadosWebMethods = [
    {
      Titulo: "",
      IdIncidente: "",
      Prioridade: "",
      Status: "",
      DataAbertura: "",
      DataNextBreachOLA: ""
    }
  ]

  constructor(private service: DashboardService) { }

  ngOnInit() {

    this.service.chamados(2)
    .subscribe(chamadosApi => {
      this.listChamadosAutomovel =  chamadosApi
    })

    this.service.chamados(3)
    .subscribe(chamadosApi => {
      this.listChamadosMassificados = chamadosApi
    })

    this.service.chamados(4)
    .subscribe(chamadosApi =>{
      this.listChamadosCargas = chamadosApi
    })

    this.service.chamados(5)
    .subscribe(chamadosApi =>{
      this.listChamadosWebMethods = chamadosApi
    })

    this.service.chamados(14)
    .subscribe(chamadosApi =>{
      this.listChamadosCentralBonus = chamadosApi
    })

  }

}
