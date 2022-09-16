import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editorial } from '../models/editorial.model';

const baseUrl = "https://rts-tbooks-bbdd.herokuapp.com/editorials";

@Injectable({
  providedIn: 'root'
})
export class EditorialsService {

  constructor(private http: HttpClient) { }

  returnAllEditorials(): Observable<Editorial[]>{
    return this.http.get<Editorial[]>(baseUrl);
  }

  returnEditorialById(id:any): Observable<Editorial>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl,data);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
