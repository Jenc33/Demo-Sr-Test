import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyApiService {
  endpoint = "http://localhost:3000";

  constructor(private httpClient:HttpClient) { }

  saveId(identification){
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post<any>(`${this.endpoint}/identifications`, identification, {headers,  responseType : 'json'}).toPromise();
  }

  searchById(id : string){
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    let params = new HttpParams().
      set('id', id);
    return this.httpClient.get<any>(`${this.endpoint}/identifications`, {headers, params, responseType : 'json'} ).toPromise();
  }

  searchByName(name : string){
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    let params = new HttpParams().
      set('name', name);
    return this.httpClient.get<any>(`${this.endpoint}/identifications`, {headers, params, responseType : 'json'} ).toPromise();
  }

  searchByIdName(id : string, name : string){
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    let params = new HttpParams()
      .set('id', id)
      .set('name', name);
    return this.httpClient.get<any>(`${this.endpoint}/identifications`, {headers, params, responseType : 'json'} ).toPromise();
  }
}
