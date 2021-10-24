import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RespostasService {

  constructor(private http: HttpClient) { }

  getAllRespostas(){
    return this.http.get('http://localhost:8080/respostas');
  
  }
}
