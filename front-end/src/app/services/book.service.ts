import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpResult} from '../_core/HttpResult';
import {environment} from '../../environments/environment';
import {IBook} from '../components/IBook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<HttpResult> {
    return this.http.get<HttpResult>(environment.url_backend + 'books');
  }

  destroy(id: number): Observable<HttpResult> {
    return this.http.delete<HttpResult>(environment.url_backend + 'books/' + id + '/destroy');
  }

  create(data: IBook): Observable<HttpResult> {
    return this.http.post<HttpResult>(environment.url_backend + 'books/add', data);
  }
}
