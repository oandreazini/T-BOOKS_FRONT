import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  constructor(private http: HttpClient) { }

  returnAllLoans(){
    return this.http.get("https://rts-tbooks-bbdd.herokuapp.com/loans");
  }
}
