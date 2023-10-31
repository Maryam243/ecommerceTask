import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class ServicsProductsService {

 constructor(private http: HttpClient) { }

 getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://dummyjson.com/products');
 }
}