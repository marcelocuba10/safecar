import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Cars } from '../models/cars';
import { Observable, throwError } from "rxjs";
import { map, retry, catchError } from 'rxjs/operators';
import { Workshop } from '../models/workshop';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private readonly url = 'http://localhost:3000/';
  private readonly url = "https://safecarbot.com/api/";

  urldb = "http://www.omdbapi.com";
  apikey = "efcc451b";
  id = "tt0944947";

  constructor(public http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  searchData(title: string): Observable<any> {
    return this.http.get(this.urldb + `?t=${title}&apikey=${this.apikey}`).pipe(
      map(results => {
        console.log('result:', results);
        results['Search'];
      })
    );
  }

  // getCarById3(id: number) {
  //   return this.http.get(this.url + `?id=${id}&apikey=${this.apikey}`);
  // }

  public getCars(): Observable<Cars> {
    return this.http.get<Cars>(this.url + 'cars').pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Create a new item
  createItem(data): Observable<Cars> {
    return this.http
      .post<Cars>(this.url + 'cars', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Update item by id
  updateItem(id, data): Observable<Cars> {
    return this.http
      .put<Cars>(this.url + 'cars/' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get single student data by ID
  getItem(id): Observable<Cars> {
    return this.http
      .get<Cars>(this.url + 'cars/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //workshops
  public getWorkshop(id): Observable<Workshop> {
    return this.http
      .get<Workshop>(this.url + 'workshops/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public getWorkshops(): Observable<Workshop> {
    return this.http.get<Workshop>(this.url + 'workshops').pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

}
