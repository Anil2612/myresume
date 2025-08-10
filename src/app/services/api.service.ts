import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getAnswer(body: any) {
    return this.http.post(`https://myresume-be.onrender.com/ask`, body)
  }
}
