import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private apiUrl = 'http://localhost:5145/api/Calculation';
  constructor(private http: HttpClient) {}

  sendCalculation(expression: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { expression });
  }

  getPreviousCalculations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}