import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cbus } from '../models/cbus';
import { MOCK_CBUS } from '../cbus.mock';
@Injectable({
  providedIn: 'root'
})
export class CbusService {

  private cbusCopy!:Cbus;
  private baseUrl!:string;
  private addCbusUrl!: string;
  private getCbusUrl!:string;
  private updateCbusUrl!:string;
  private deleteCbusUrl!:string;


  
  constructor(private http: HttpClient) 
  {    
    this.baseUrl="http://localhost:8080/api/cbus";
    this.addCbusUrl="http://localhost:8080/api/cbus/add";
    this.getCbusUrl="http://localhost:8080/api/cbus/getAll";
    this.updateCbusUrl="http://localhost:8080/api/cbus/update/";
    this.deleteCbusUrl="http://localhost:8080/api/cbus/delete/";

  }
  public setData(cbus :Cbus)
  {
    this.cbusCopy=cbus;

  }
  public getData():Cbus
  {
    return this.cbusCopy;
  }
  public getCbus(): Observable<Cbus[]>{
    return this.http.get<Cbus[]>(`${this.getCbusUrl}`);
  }

  public postCbus(cbus: Cbus): Observable<Cbus> {
    return this.http.post<Cbus>(`${this.addCbusUrl}`, cbus);
  }

  public updateCbus(cbus: Cbus): Observable<Cbus>{
    return this.http.put<Cbus>(`${this.updateCbusUrl}${cbus.crestra}`,cbus);
  }
  public getCbusById(id:number): Observable<Cbus>{
    return this.http.get<Cbus>(`${this.baseUrl}/id`);
  }
  public getCbusByFind(id:number):any{
    return MOCK_CBUS.find( x=> x.crestra === id);
  }
  public deleteCbus(id:number,cbus:Cbus): Observable<Cbus>{
    return this.http.delete<Cbus>(`${this.deleteCbusUrl}`+id);
  }
  
}
