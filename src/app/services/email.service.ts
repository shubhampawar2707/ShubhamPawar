import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'YOUR_EMAIL_API_ENDPOINT'; // You'll need to replace this with your actual email service endpoint

  constructor(private http: HttpClient) { }

  sendEmail(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
} 