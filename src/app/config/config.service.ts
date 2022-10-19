import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
HttpHeaders
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient
  ) { }

getData(data:any){
  return this.http.post<any>('https://sage-og-ghost.cloud.okteto.net/api/v1/office', data)
}
}
