import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobOpeningService {

   url ='http://localhost:4000'


  constructor(private http:HttpClient) { }

  postdata(data){
  return this.http.post(`${this.url}/jobopening`,data);
  }
  getData(){
    return this.http.get(`${this.url}/jobopening`)
  }
}
