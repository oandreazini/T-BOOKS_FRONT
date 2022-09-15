import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorialsService {

  constructor(private http: HttpClient) { }

  returnAllEditorials(){
    return this.http.get("https://rts-tbooks-bbdd.herokuapp.com/editorials");
  }
}
