import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Cars } from '../models/cars';
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { Workshop } from '../models/workshop';
import { Expenses } from '../models/expenses';
import { Maintenance } from '../models/maintenance';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private readonly base_path = 'http://localhost:3000/';
  private readonly base_path = "https://safecarbot.com/api/";

  urldb = "http://www.omdbapi.com";
  apikey = "efcc451b";

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

  /*
  searchData(title: string): Observable<any> {
    return this.http.get(this.urldb + `?t=${title}&apikey=${this.apikey}`).pipe(
      map(results => {
        console.log('result:', results);
        results['Search'];
      })
    );
  }

  getCarByIdKey(id: number) {
    return this.http.get(this.url + `?id=${id}&apikey=${this.apikey}`);
  }
  */

  //cars

  public getCars(): Observable<Cars> {
    return this.http.get<Cars>(this.base_path + 'cars').pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  public getCarById(id): Observable<Cars> {
    return this.http
      .get<Cars>(this.base_path + 'cars/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public createCar(data): Observable<Cars> {
    return this.http
      .post<Cars>(this.base_path + 'cars', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public updateCar(id, data): Observable<Cars> {
    return this.http
      .put<Cars>(this.base_path + 'cars/' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public deleteCar(id) {
    return this.http
      .delete<Cars>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //workshops

  public getWorkshops(): Observable<Workshop> {
    return this.http.get<Workshop>(this.base_path + 'workshops').pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  public getWorkshopById(id): Observable<Workshop> {
    return this.http
      .get<Workshop>(this.base_path + 'workshops/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //expenses

  public getExpenses(): Observable<Expenses> {
    return this.http.get<Expenses>(this.base_path + 'expenses').pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  public getExpenseById(id): Observable<Expenses> {
    return this.http
      .get<Expenses>(this.base_path + 'expenses/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public createExpense(data): Observable<Expenses> {
    return this.http
      .post<Expenses>(this.base_path + 'expenses', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public updateExpense(id, data): Observable<Expenses> {
    return this.http
      .put<Expenses>(this.base_path + 'expenses/' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public deleteExpense(id) {
    return this.http
      .delete<Expenses>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //Maintenances

  public getMaintenances(): Observable<Maintenance> {
    return this.http.get<Maintenance>(this.base_path + 'maintenances').pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  public getMaintenanceById(id): Observable<Maintenance> {
    return this.http
      .get<Maintenance>(this.base_path + 'maintenances/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public createMaintenance(data): Observable<Maintenance> {
    return this.http
      .post<Maintenance>(this.base_path + 'maintenances', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public updateMaintenance(id, data): Observable<Maintenance> {
    return this.http
      .put<Maintenance>(this.base_path + 'maintenances/' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public deleteMaintenance(id) {
    return this.http
      .delete<Maintenance>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
