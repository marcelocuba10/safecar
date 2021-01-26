import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/post';
import { Cars } from '../models/cars';
import { Observable, throwError  } from "rxjs";
import { map, retry, catchError } from 'rxjs/operators';
import { Workshop } from '../models/workshop';

export enum SearchType{
  all="",
  movie="movie",
  series="series",
  episode="episode"
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //url = 'https://jsonplaceholder.typicode.com/posts';

  //private readonly url = '/assets/all.json';
  private readonly url = 'http://localhost:3000/';

  urldb = "http://www.omdbapi.com";
  apikey = "efcc451b";
  id="tt0944947";
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
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  searchData(title: string) : Observable<any>{
    console.log("ingresa en la fuicion");
    return this.http.get(this.urldb + `?t=${title}&apikey=${this.apikey}`).pipe(
      //map(results => results['Search'])
      map(results => {
        console.log('result:', results);
        results['Search'];
      })
    );
  }

  getCarById3(id:number){
    return this.http.get(this.url + `?id=${id}&apikey=${this.apikey}`);
  }

  // getPosts() {
  //   return new Promise(resolve => {
  //     this.http.get(this.url).subscribe(data => {
  //       resolve(data);
  //     }, error => {
  //       console.log(error);
  //     });
  //   });
  // }
  $id = 2;

  public getCars(): Observable<Cars> {
    //return this.http.get<Post>(this.url+'?id='+this.$id);
    return this.http.get<Cars>(this.url+'cars').pipe(
      //map(results => results['cars']),
      retry(2),
      catchError(this.handleError)
    );
  }

  public getCarById(id:string){
    return this.http.get<Cars>(this.url + `cars/${id}`).pipe(
      map(data => {
        console.log('data service:', data);
        data["cars"];
        retry(2),
        catchError(this.handleError)

      })
    );
  }

  public getFrase(): Observable<Post> {
    //return this.http.get<Post>(this.url+'?id='+this.$id);

    return this.http.get<Post>(this.url).pipe(
      map(results => results['menuItems'])
    );

  }

  // getPosts(){
  //   const path= 'https://jsonplaceholder.typicode.com/posts';
  //   return this.http.get<Post[]>(path);
  // }

  addPost(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, JSON.stringify(data))
        .subscribe(response => {
          resolve(response);
        }, (error) => {
          reject(error);
        });
    });
  }

    // Create a new item
    createItem(item): Observable<Cars> {
      return this.http
        .post<Cars>(this.url+'cars', JSON.stringify(item), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

    // Update item by id
    updateItem(id, item): Observable<Cars> {
      return this.http
        .put<Cars>(this.url + 'cars/' + id, JSON.stringify(item), this.httpOptions)
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
      return this.http.get<Workshop>(this.url+'workshops').pipe(
        retry(2),
        catchError(this.handleError)
      );
    }

}
