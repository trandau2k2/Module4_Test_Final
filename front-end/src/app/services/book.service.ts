import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {IBook} from '../components/IBook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(environment.url_backend + 'books');
  }
  //
  // destroy(id: number): Observable<IBook[]> {
  //   return this.http.delete<IBook>(environment.url_backend + 'books');
  // }
  //
  update(data: IBook):Observable<IBook> {
    return this.http.patch<IBook>(environment.url_backend + 'books', data)
  }

  create(data: IBook): Observable<IBook> {
    return this.http.post<IBook>(environment.url_backend + 'books', data);
  }
}
