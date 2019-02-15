import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DashboardService{

    //url = 'http://localhost:29215/api/Chamados/'
    //url = 'https://chamadoshpapi.azurewebsites.net/api/Chamados/'
    url = 'https://chamadoshpapi.azurewebsites.net/api/sustain/'

    constructor(private conexaoApi: HttpClient){}
    listar(opcao): Observable<any>{
        return this.conexaoApi.get<any>(`${this.url}${opcao}`)
    }
    
    chamados(opcao): Observable<any>{
        return this.conexaoApi.get<any>(`${this.url}${opcao}`)
    }

}
