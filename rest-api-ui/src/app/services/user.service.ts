import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { awsUrl } from 'src/environments/environment';
// we must import HttpClientModule in the app.module.ts

import { User } from '../models/user';

const url = `${awsUrl}/users`

//we will inject this service into the components that call its methods
//within their methods
@Injectable({
  providedIn: 'root'
})
export class UserService { //this service is only responsible for one thing: HTTP requests!

  constructor(private http: HttpClient) { }

  //we need to append headers to all requests
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //POST
  public registerUser(user: User): Observable<User> {

    return this.http.post<User>(`${url}/add`, user, this.httpOptions) //url, user, this.httpOptions
      .pipe(
        catchError(this.handleError)
      )
  }

  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(url)
      .pipe(
        catchError(this.handleError)
      )
  }

  public findById(id: number): Observable<User> {
    return this.http.get<User>(`${url}/${id}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  public findByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${url}/find/${username}`);
  }

  // create a method called handle error
  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      console.log("an error occured: ", httpError.error.message)
    } else {
      console.error(`
        Backend returned code ${httpError.status},
        body was: ${httpError.error}
      `)
    }
    return throwError('Something bad happened')
  }
}
