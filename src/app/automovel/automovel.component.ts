import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../dashboard/dashboard.service";

@Component({
  selector: "hp-automovel",
  templateUrl: "./automovel.component.html",
  styles: []
})
export class AutomovelComponent implements OnInit {
  listaDeChamadosAutomovel = [
    {
      Titulo: "",
      IdIncidente: "",
      Prioridade: "",
      Status: "",
      DataAbertura: "", 
      DataNextBreachOLA: ""
    }
  ];

  constructor(private serviceDashboard: DashboardService) {}

  ngOnInit() {
    this.serviceDashboard.listar(6).subscribe(chamadosApi => {
      this.listaDeChamadosAutomovel = chamadosApi.Table;
    });
  }
}
