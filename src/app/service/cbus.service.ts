import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cbus } from '../models/cbus';
import { MOCK_CBUS } from '../cbus.mock';
@Injectable({
  providedIn: 'root'
})
export class CbusService {

  cbusCopy!:Cbus;

  private baseUrl="http://localhost/8080/api/cbus"
  constructor(private http: HttpClient) 
  {    
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
    return this.http.get<Cbus[]>(`${this.baseUrl}`);
  }

  public postCbus(cbus: Cbus): Observable<Cbus> {
    return this.http.post<Cbus>(`${this.baseUrl}add`, cbus);
  }

  public updateCbus(id:number,cbus: Cbus): Observable<Cbus>{
    return this.http.put<Cbus>(`${this.baseUrl+id}`,cbus);
  }
  public getCbusById(id:number): Observable<Cbus>{
    return this.http.get<Cbus>(`${this.baseUrl}id`);
  }
  public getCbusByFind(id:number):any{
    return MOCK_CBUS.find( x=> x.crestra === id);
  }
  
}
