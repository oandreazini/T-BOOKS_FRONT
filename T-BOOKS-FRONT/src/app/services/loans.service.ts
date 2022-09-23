import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../models/loan.model';

const baseUrl = "https://rts-tbooks-bbdd.herokuapp.com/loans"

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  constructor(private http: HttpClient) { }

  returnAllLoans(): Observable<Loan[]>{
    return this.http.get<Loan[]>(baseUrl);
  }

  returnLoanById(id:any): Observable<Loan>{
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

  returnLoanByBook(id: any): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${baseUrl}/book/${id}`);
  }

  returnLoanByUser(id: any): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${baseUrl}/usuario/${id}`);
  }
}
